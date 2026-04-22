import React, { useLayoutEffect, useRef, useCallback, useState, useEffect } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

interface TransformData {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
  brightness: number;
}

interface StyledElement extends HTMLElement {
  style: CSSStyleDeclaration & {
    webkitTransform?: string;
    perspective?: string;
    webkitPerspective?: string;
  };
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<StyledElement[]>([]);
  const cardOffsetsRef = useRef<number[]>([]);
  const endElementOffsetRef = useRef<number>(0);
  const lastTransformsRef = useRef<Map<number, TransformData>>(new Map());
  const isUpdatingRef = useRef(false);
  const [isInView, setIsInView] = useState(false);
  const isMobileRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop,
        containerHeight: window.innerHeight,
      };
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return { scrollTop: 0, containerHeight: 0 };
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + (window.pageYOffset || document.documentElement.scrollTop);
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endElementOffsetRef.current;
    const isMobile = isMobileRef.current;

    // Fast path for when we are far above the stack
    const firstCardTop = cardOffsetsRef.current[0] || 0;
    if (scrollTop < firstCardTop - containerHeight * 1.5) {
      isUpdatingRef.current = false;
      return;
    }

    let topCardIndex = 0;
    // Pre-calculate trigger starts to avoid repeated math
    const triggerStarts = cardsRef.current.map(
      (_, i) => (cardOffsetsRef.current[i] || 0) - stackPositionPx - itemStackDistance * i,
    );

    for (let j = 0; j < triggerStarts.length; j++) {
      if (scrollTop >= triggerStarts[j]) {
        topCardIndex = j;
      }
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] || 0;
      const triggerStart = triggerStarts[i];

      // Reveal logic (simplified)
      const revealStart = triggerStart - 300;
      const revealEnd = triggerStart + 100;
      const revealProgress = Math.min(1, Math.max(0, (scrollTop - revealStart) / 400));

      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount && !isMobile && i < topCardIndex) {
        blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      let brightness = 1;
      if (!isMobile && i < topCardIndex) {
        brightness = Math.max(0.6, 1 - (topCardIndex - i) * 0.1);
      }

      const lastTransform = lastTransformsRef.current.get(i);

      // Precision checks to avoid unnecessary DOM updates
      const tY = Math.round(translateY);
      const s = Math.round(scale * 1000) / 1000;
      const r = Math.round(rotation * 10) / 10;
      const b = Math.round(blur * 10) / 10;
      const br = Math.round(brightness * 100) / 100;

      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - tY) > 0.5 ||
        Math.abs(lastTransform.scale - s) > 0.001 ||
        Math.abs(lastTransform.rotation - r) > 0.1 ||
        Math.abs(lastTransform.blur - b) > 0.1 ||
        Math.abs(lastTransform.brightness - br) > 0.01;

      if (hasChanged) {
        const transform = `translate3d(0, ${tY}px, 0) scale(${s}) rotate(${r}deg)`;
        card.style.transform = transform;

        if (!isMobile) {
          let filter = `brightness(${br})`;
          if (b > 0) filter += ` blur(${b}px)`;
          card.style.filter = filter;
        } else {
          card.style.filter = "none";
        }

        card.style.setProperty("--reveal", revealProgress.toFixed(3));
        lastTransformsRef.current.set(i, {
          translateY: tY,
          scale: s,
          rotation: r,
          blur: b,
          brightness: br,
        });
      }

      if (i === cardsRef.current.length - 1) {
        const isComplete = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isComplete && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isComplete && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
  ]);

  const updateOffsets = useCallback(() => {
    if (!cardsRef.current.length) return;

    // Reset transforms to get clean offsets
    cardsRef.current.forEach((card) => {
      card.style.transform = "none";
    });

    const endElement = useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end");

    if (endElement) {
      endElementOffsetRef.current = getElementOffset(endElement as HTMLElement);
    }

    cardOffsetsRef.current = cardsRef.current.map((card) => getElementOffset(card));
    lastTransformsRef.current.clear();
    updateCardTransforms();
  }, [getElementOffset, updateCardTransforms, useWindowScroll]);

  // Intersection Observer to stop processing when not in view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      rootMargin: "200px 0px",
    });

    if (scrollerRef.current) {
      observer.observe(scrollerRef.current);
    } else if (useWindowScroll) {
      // If using window scroll, we still want to observe the container's position
      const container =
        document.querySelector(`.${className.split(" ")[0]}`) || scrollerRef.current;
      if (container) observer.observe(container);
    }

    return () => observer.disconnect();
  }, [useWindowScroll, className]);

  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (!isInView) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateCardTransforms();
          ticking = false;
        });
        ticking = true;
      }
    };

    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const isMobile = isMobileRef.current;
      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
        duration: isMobile ? 1.2 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
        lerp: isMobile ? 0.1 : 0.1,
        syncTouch: false, // Disabling syncTouch can improve performance on some mobile browsers
      });

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      lenis.on("scroll", updateCardTransforms);
      lenisRef.current = lenis;
    }

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scrollerRef.current?.querySelectorAll(".scroll-stack-card") || [],
    ) as HTMLElement[];

    cardsRef.current = cards;
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    updateOffsets();
    window.addEventListener("resize", updateOffsets);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffsets);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, [isInView, useWindowScroll, updateCardTransforms, updateOffsets, itemDistance]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
