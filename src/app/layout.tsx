import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactLenis, useLenis } from "lenis/react";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const customFont = localFont({
  src: "./fonts/e11418ac562b8ac1.p.woff2",
  variable: "--font-custom",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solaris",
  description:
    "Instantly converse with your documents—upload, ask questions, and get answers effortlessly",
  icons: [{ rel: "icon", url: "logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ReactLenis root options={{ autoRaf: true }}>
              {children}
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
