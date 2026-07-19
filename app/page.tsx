import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-background">
        <Hero />
      </main>
    </>
  );
}
