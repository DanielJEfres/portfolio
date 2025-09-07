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
    "Portfolio of Daniel Efres — Software Engineer at UCF TechRangers, former BNY intern, secretary of Knight Hacks, and undergraduate junior studying Computer Science at UCF. Passionate about full stack development, machine learning, and mentorship.",
  icons: {
    icon: "/favicon4.png",
    shortcut: "/favicon4.png",
    apple: "/favicon4.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.danielefres.dev",
    title: "Daniel Efres",
    description:
      "Portfolio of Daniel Efres — Software Engineer at UCF TechRangers, former BNY intern, secretary of Knight Hacks, and undergraduate junior studying Computer Science at UCF. Passionate about full stack development, machine learning, and mentorship.",
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
    title: "Daniel Efres",
    description:
      "Portfolio of Daniel Efres — Software Engineer at UCF TechRangers, former BNY intern, secretary of Knight Hacks, and undergraduate junior studying Computer Science at UCF. Passionate about full stack development, machine learning, and mentorship.",
    images: [
      {
        url: "https://www.danielefres.dev/images/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
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
