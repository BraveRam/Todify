import Navbar from '../components/Navbar';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/features/theme-provider"
import { NextAuthProvider } from './Provider'; 
import Footer from "../components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Todo App",
  description: "Created with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased block mx-auto`}
      >
      <NextAuthProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
          <Navbar/>
            {children}
          <Footer />
          </ThemeProvider>
      </NextAuthProvider>
      </body>
    </html>
  );
}
