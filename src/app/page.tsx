"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { HoverCardDemo } from "@/components/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundBeams } from "@/components/ui/background-beams";

import CustomMenu from "@/components/custom-menu";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogIn, MoveRight } from "lucide-react";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Navigation } from "@/components/navbar";
import { SparklesPreview } from "@/components/SparklesPreview";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-1 inset-x-0 z-30 w-full p-4">
        <div className="flex items-center justify-between relative">
          {/* Logo section, shown on all screen sizes */}

          <HoverCardDemo />

          {/* Main navigation for larger screens */}
          <div className="hidden md:flex justify-center items-center">
            <Navigation />
          </div>

          {/* Right section */}

          {/* Custom Menu and Mode Toggle are grouped together for smaller screens */}
          <div className="flex md:hidden gap-3">
            <CustomMenu />
            <ModeToggle />
          </div>

          {/* Mode Toggle for larger screens */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </nav>

      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center min-h-[40vh]">
        <BackgroundBeams />
        <div className="flex flex-col items-center justify-center gap-4">
          <Badge variant="outline">Solaris is now public</Badge>
          <h1 className="max-w-6xl font-[customFont] text-3xl md:text-5xl lg:text-[53.94px] leading-8 tracking-[-0.2px] sm:leading-[40px] md:tracking-[0.5px] md:leading-[50px] lg:tracking-[-2.0788px] lg:leading-[60.334px]">
            Instant Conversations with Your Documents—Upload, Ask, and Discover
            Answers Effortlessly
          </h1>
          <p className="text-base md:text-lg lg:text-xl tracking-[-0.2px] leading-[22px] font-[customFont]">
            Effortlessly explore insights and find the information you need in
            seconds.
          </p>
        </div>
        <div className="flex gap-6 md:gap-10 mt-5">
          <Link href="/sign-up">
            <Button variant="default" className="px-6 py-5">
              Get Started
              <LogIn className="w-3 h-4 md:w-4 md:h-6 lg:w-5 lg:h-7 ml-2" />
            </Button>
          </Link>
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "px-6 py-5 hover:underline",
            })}
            href="/pricing"
          >
            Try Premium <MoveRight className="ml-3" />
          </Link>
        </div>
      </MaxWidthWrapper>

      <div className="py-24 sm:py-32">
        <div className="relative isolate">
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-secondary p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl">
                  <Image
                    src="/1.png"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
              <p className="text-base md:text-2xl lg:text-[23.97px] md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[28px] tracking-[-0.3px] leading-[20px] mt-10 mb-10 font-[customFont]">
                Solaris empowers you to effortlessly extract insights from your
                documents, enabling precise answers to your questions with
                unmatched clarity and speed, thanks to its advanced AI-driven
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-24 sm:py-32">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-soehne text-4xl sm:text-5xl">
              Get answers from your documents in seconds
            </h2>
            <p className="mt-4 text-lg md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[34px] tracking-[-0.3px] leading-[22px] font-soehne">
              Textify redefines how you chat with your PDF files—easy and
              intuitive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4 mb-32 mt-20 justify-between">
          <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-xl">
                For Researchers
              </CardTitle>
              <CardDescription className="text-base sm:text-sm">
                Explore scientific papers, academic articles, and books to get
                the information you need for your research.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/researchers.png"
                alt="research"
                className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full"
              />
            </CardContent>
          </Card>

          <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-xl">
                For Students
              </CardTitle>
              <CardDescription className="text-base sm:text-sm">
                Study for exams, get help with homework, and answer multiple
                choice questions faster than your classmates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/students.png"
                alt="student"
                className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full"
              />
            </CardContent>
          </Card>

          <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-xl">
                For Professionals
              </CardTitle>
              <CardDescription className="text-base sm:text-sm">
                Navigate legal contracts, financial reports, manuals, and
                training material. Ask questions to any PDF to stay ahead.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/professionals.png"
                alt="professional"
                className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-secondary rounded-lg mx-auto w-full max-w-4xl sm:max-w-2xl lg:max-w-5xl min-h-[400px] sm:min-h-[450px] md:min-h-[500px] px-4 lg:px-0 py-12 sm:py-16 md:py-20 flex items-center justify-center my-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="col-span-12 flex flex-col gap-2 md:col-span-8 md:col-start-3">
            <h2 className="font-medium text-xl sm:text-2xl md:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[43.2px] tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.36px] mb-4 w-full sm:w-3/4 flex justify-center mx-auto text-center text-h4 text-balance font-[customFont]">
              Instant answers. Greater productivity. Endless inspiration.
            </h2>
            <div className="flex items-center justify-center flex-row gap-1 sm:gap-2 md:gap-3 flex-wrap">
              <button className="bg-white text-black px-4 py-3 rounded-full text-base sm:text-sm font-medium transition hover:bg-gray-200 flex">
                Try Solaris <ArrowUpRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-24 sm:py-32 px-4">
        <h1 className="text-3xl md:text-4xl font-soehne mb-12">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is Solaris and how can it help me?
            </AccordionTrigger>
            <AccordionContent>
              Solaris brings the power of conversational AI to your documents,
              letting you chat with your PDFs as easily as using ChatGPT.
              Whether you're studying, researching, or analyzing documents, our
              platform helps you understand and extract information in seconds,
              backed up by the latest PDF AI technology.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is Solaris free?</AccordionTrigger>
            <AccordionContent>
              Absolutely! We offer a free plan that lets you analyze 5 documents
              every day. For power users, our Solaris Plus plan provides
              unlimited document analysis, and more advanced features.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why use Solaris instead of ChatGPT for PDF analysis?
            </AccordionTrigger>
            <AccordionContent>
              Solaris is purpose-built for document analysis with features you
              won't find in general AI tools. Our intuitive side-by-side
              interface displays your chat and document together, while
              clickable citations instantly scroll to the exact source in your
              PDF. This specialized design makes document understanding faster
              and more reliable than anywhere else.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is my data secure and confidential?
            </AccordionTrigger>
            <AccordionContent>
              We implement the highest security standards. Your documents are
              protected by SSL encryption during transfer and remain encrypted
              while stored. Our SOC2 Type II certified storage provider ensures
              enterprise-level security, while you maintain full control over
              your data - with the ability to delete your documents at any time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="py-24 sm:py-32">
        <SparklesPreview />
      </div>

      <MaxWidthWrapper className="mb-6 mt-10 sm:mt-20">
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}
