import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umesh Tandon | Software Engineer",
  description: "I am a Software Engineer @Bery Bird Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background", anek.className)}>{children}</body>
    </html>
  );
}
