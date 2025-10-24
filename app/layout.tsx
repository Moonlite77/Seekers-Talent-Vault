import type { Metadata } from "next";
import "./globals.css";
import  MainBackground  from "@/app/custom-components/main-background";
import {Lora} from "next/font/google"
import MainNavBar from "./custom-components/main-navbar";
import { ClerkProvider } from "@clerk/nextjs";

const lora = Lora({
  subsets: ['latin',]
})

export const metadata: Metadata = {
  title: "Vacation Tutorial",
  description: "Relax and learn the little bits of things I never learned properly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={lora.className}>
        <body className="grid">
          <MainBackground />
          <MainNavBar />
          <div className="grid h-screen w-[100vw] justify-items-center items-center overflow-hidden">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
