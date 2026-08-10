import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { AboutHero } from "@/sections/about-hero";
import { AboutFounders } from "@/sections/about-founders";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About Us | GrowWithHustler",
  description: "Learn about Grow With Hustler, our team, and our mission to build high-performing digital products for ambitious founders.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen flex flex-col justify-between pt-[72px] sm:pt-[96px] lg:pt-[100px] bg-background select-none">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.20]">
          <Image
            src="/images/hero/GWH_Background Texture.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blueprint grid background — right side */}
        <div className="absolute right-0 top-0 h-full w-1/2 z-0 pointer-events-none opacity-[0.04] hidden lg:block">
          <Image
            src="/images/hero/GWH_Grid Background.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          {/* ── ROW 1: Hero section (About Us + Vector Illustration) ── */}
          <AboutHero />

          {/* ── ROW 2: Founders section (Arunabha Banerjee & Akarsh Kumar) with generous desktop spacing ── */}
          <AboutFounders />
        </div>

        <Footer />
      </main>
    </>
  );
}
