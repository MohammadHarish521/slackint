import type { Metadata } from "next";
import { Inter, Newsreader, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "slackint - Intelligent AI Support",
  description: "Deliver intelligent AI support directly in your Slack workspace, replacing the need for human support engineers entirely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${newsreader.variable} ${oswald.variable} antialiased bg-[#000000] text-white selection:bg-primary selection:text-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
