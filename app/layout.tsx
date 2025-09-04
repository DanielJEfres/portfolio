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
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "OpenCV",
    "Prisma",
    "Drizzle",
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
    url: "https://danielefres.dev",
    title: "About | Daniel Efres",
    description:
      "Daniel Efres is an undergraduate student at the University of Central Florida who is passionate about software engineering. He's a previous intern at BNY and specializes in full-stack development, machine learning, and more!",
    siteName: "Daniel Efres",
    images: [
      {
        url: "/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Daniel Efres",
    description:
      "Daniel Efres is an undergraduate student at the University of Central Florida who is passionate about software engineering. He's a previous intern at BNY and specializes in full-stack development, machine learning, and more!",
    images: ["/daniel.png"],
    creator: "@DanielJEfres",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F4F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  metadataBase: new URL("https://danielefres.dev"),
} as Metadata;

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
