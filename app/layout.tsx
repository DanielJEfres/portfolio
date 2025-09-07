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
  title: "About | Daniel Efres",
  description:
    "Daniel Efres is an undergraduate student at the University of Central Florida who is passionate about software engineering. He's a previous intern at BNY and specializes in full-stack development, machine learning, and more!",
  keywords: [
    "Daniel Efres",
    "Software Engineer",
    "Full Stack",
    "Knight Hacks",
    "BNY",
    "UCF",
    "University of Central Florida",
    "Computer Science",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Daniel Jose Efres" }],
  creator: "Daniel Jose Efres",
  publisher: "Daniel Jose Efres",
  icons: {
    icon: "/favicon4.png",
    shortcut: "/favicon4.png",
    apple: "/favicon4.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.danielefres.dev",
    title: "About | Daniel Efres",
    description:
      "Daniel Efres is an undergraduate student at the University of Central Florida who is passionate about software engineering. He's a previous intern at BNY and specializes in full-stack development, machine learning, and more!",
    siteName: "Daniel Efres",
    images: [
      {
        url: "https://www.danielefres.dev/images/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Daniel Efres",
    description:
      "Daniel Efres is an undergraduate student at the University of Central Florida who is passionate about software engineering. He's a previous intern at BNY and specializes in full-stack development, machine learning, and more!",
  images: ["https://www.danielefres.dev/images/daniel.png"],
    creator: "@DanielJEfres",
  },
  metadataBase: new URL("https://www.danielefres.dev"),
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
