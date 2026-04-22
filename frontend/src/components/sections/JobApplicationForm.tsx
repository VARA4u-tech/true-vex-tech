import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "../site/Logo";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  dob: z.string().min(1, "Date of birth is required"),
  address: z.string().min(5, "Address is required"),
  gender: z.enum(["male", "female", "other"]),
  position: z.string().min(1, "Please select a position"),
  location: z.string().min(1, "Please select a location"),
  qualification: z.string().min(1, "Please select your qualification"),
  passoutYear: z.string().min(4, "Invalid year"),
  experience: z.string().min(1, "Please select your experience"),
  otherQualification: z.string().optional(),
  coverLetter: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

interface JobApplicationFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPosition?: string;
}

export function JobApplicationForm({
  isOpen,
  onOpenChange,
  defaultPosition,
}: JobApplicationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      gender: "male",
      position: defaultPosition || "",
      location: "",
      qualification: "",
      passoutYear: "",
      experience: "",
      coverLetter: "",
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
    alert("Application submitted successfully!");
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card text-white p-0 border border-white/10 shadow-2xl rounded-3xl">
        <div className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center mb-10">
            <Logo />
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-medium">
              Innovating solutions for a connected world
            </p>
            <DialogTitle className="mt-6 text-3xl font-bold">Join Our Team</DialogTitle>
            <DialogDescription className="mt-2 text-sm text-gray-400">
              Thank you for your interest in joining our team. Please fill out the application form
              below.
            </DialogDescription>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              {/* Personal Information */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-primary">
                  Personal Information
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Full Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                            className="bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Gmail"
                            {...field}
                            className="bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="10 digit mobile number"
                            {...field}
                            className="bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Date of Birth <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            className="bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all [color-scheme:dark]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Current Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your full address"
                          {...field}
                          className="min-h-[100px] bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>
                        Gender <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          {["male", "female", "other"].map((g) => (
                            <FormItem key={g} className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem
                                  value={g}
                                  className="border-white/20 text-primary"
                                />
                              </FormControl>
                              <FormLabel className="font-normal capitalize text-gray-300">
                                {g}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              {/* Job Details */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-primary">
                  Job Details
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Position Applied For <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="Software Engineer">Software Engineer</SelectItem>
                            <SelectItem value="Java Developer">Java Developer</SelectItem>
                            <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                            <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                            <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                            <SelectItem value="QA / Software Tester">
                              QA / Software Tester
                            </SelectItem>
                            <SelectItem value="IT Staffing">IT Staffing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Preferred Location <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="Vijayawada">Vijayawada</SelectItem>
                            <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="Bangalore">Bangalore</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </section>

              {/* Educational Details */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-primary">
                  Educational Details
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Highest Qualification <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10 text-white">
                            <SelectItem value="BCA">BCA</SelectItem>
                            <SelectItem value="BSc">BSc</SelectItem>
                            <SelectItem value="BBA">BBA</SelectItem>
                            <SelectItem value="BE">BE</SelectItem>
                            <SelectItem value="BCom">BCom</SelectItem>
                            <SelectItem value="BTech">BTech</SelectItem>
                            <SelectItem value="BA">BA</SelectItem>
                            <SelectItem value="MCA">MCA</SelectItem>
                            <SelectItem value="MBA">MBA</SelectItem>
                            <SelectItem value="MSc">MSc</SelectItem>
                            <SelectItem value="MCom">MCom</SelectItem>
                            <SelectItem value="MA">MA</SelectItem>
                            <SelectItem value="ME">ME</SelectItem>
                            <SelectItem value="MTech">MTech</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {form.watch("qualification") === "Others" && (
                    <FormField
                      control={form.control}
                      name="otherQualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Specify Qualification <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your qualification"
                              {...field}
                              className="bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <FormField
                    control={form.control}
                    name="passoutYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Passed Out Year <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. 2024"
                            {...field}
                            className="bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </section>

              {/* Work Experience */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2 text-primary">
                  Work Experience
                </h3>
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Total Work Experience <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-white">
                          <SelectItem value="Fresher">Fresher</SelectItem>
                          <SelectItem value="1-3 years">1-3 years</SelectItem>
                          <SelectItem value="3-5 years">3-5 years</SelectItem>
                          <SelectItem value="5+ years">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              {/* Resume Upload */}
              <section className="space-y-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                  Resume <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 border-white/10 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-300 font-semibold">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                </div>
              </section>

              {/* Cover Letter */}
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us why you'd be a great fit..."
                        {...field}
                        className="min-h-[150px] bg-white/5 border-white/10 focus:bg-white/10 text-white transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Agreement */}
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-primary/5 border-primary/20">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium text-gray-300">
                        I agree to the processing of my personal data according to GDPR regulations.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  className="w-full md:w-auto h-14 px-12 bg-primary hover:bg-primary-glow text-white text-lg font-bold shadow-glow transition-all hover:-translate-y-0.5"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
