import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "./lib/utils";
const inter = Inter({
  subsets:['latin']
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 export const spaceGrotest = Space_Grotesk({
  variable: "--space-grotest",
})

export const metadata: Metadata = {
  title: {
    default: "Guilty - your PDF friend.",
    template: "%s - enjoy working with PDF" 
  },
  description: "You will forget about PDF issues",
  twitter:{
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen font-sans antialised-granny', inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
