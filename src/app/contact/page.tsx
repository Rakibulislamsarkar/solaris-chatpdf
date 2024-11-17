"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HoverCardDemo } from "@/components/hover-card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const formSchema = z.object({
  name_2845957498: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  name_8253397704: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
  name_4976097302: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function EnhancedForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_2845957498: "",
      name_8253397704: "",
      name_4976097302: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Form submitted successfully!", {
        description: "We've received your information.",
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:block lg:w-7/12 bg-primary">
        <div className="flex flex-col justify-between h-full p-10">
          <div>
            <Link href='/'>
            <HoverCardDemo /></Link>
          </div>
          <div>
            {" "}
            <p className="text-base mb-10 text-white">
              Get in touch with us! <br/> Fill out the form, and our team will get
              back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12 p-4 lg:p-8 overflow-y-auto">
        <Card className="w-full max-w-3xl mx-auto my-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out this form to get in touch with our team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name_2845957498"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name_8253397704"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl className="w-full">
                        <PhoneInput
                          placeholder="Enter your phone number"
                          {...field}
                          defaultCountry="TR"
                        />
                      </FormControl>
                      <FormDescription>
                        We'll use this to contact you if necessary.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name_4976097302"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your valuable feedback or questions"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        You can @mention other users and organizations.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              onClick={form.handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
