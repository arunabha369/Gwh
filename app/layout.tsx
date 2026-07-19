import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowWithHustler | Premium Software Development Agency",
  description: "High-converting website development, web apps, mobile apps, and AI solutions. Engineered to grow your business.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
