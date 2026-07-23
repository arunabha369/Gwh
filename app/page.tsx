import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/sections/hero";
import { WhyUs } from "@/sections/why-us";
import { Services } from "@/sections/services";
import { Projects } from "@/sections/projects";
import { Testimonials } from "@/sections/testimonials";
import { Process } from "@/sections/process";
import { CTA } from "@/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-background">
        <Hero />
        <WhyUs />
        <Services />
        <Projects />
        <Testimonials />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
