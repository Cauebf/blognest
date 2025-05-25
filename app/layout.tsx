import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogNest",
  description:
    "BlogNest is a modern blogging platform where users can create, explore, and share posts effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // only in layout.tsx, if we wrap components with a client component, the child components will not necessarily be client components
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
