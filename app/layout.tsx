import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigationbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Efres",
  description:
    "Daniel Efres is an undergraduate student at the University of Central Florida and an aspiring software engineer.",
  keywords: [
    "Daniel Efres",
    "Software Engineer",
    "UCF",
    "University of Central Florida",
    "Knight Hacks",
    "Hackathon Organizer",
    "Full Stack Developer",
    "Web Development",
    "React",
    "TypeScript",
    "Next.js",
    "Open Source",
  ],
  openGraph: {
    type: "website",
    title: "Daniel Efres",
    description:
      "Daniel Efres is a software engineer and Computer Science student at UCF. He builds full-stack web apps, organizes hackathons, and creates accessible tools for creative communities.",
    url: "https://danielefres.dev",
    images: [{ url: "https://danielefres.dev/images/favicon4.png" }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-[#F3F4F6] animate-fadeIn">
        <Navigationbar />
        <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </main>
      </body>
    </html>
  );
}
