"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // easeOutCubic
      },
    },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full h-[64px] md:h-[88px] flex items-center bg-transparent transition-all duration-300",
        isScrolled && "backdrop-blur-sm border-b-[1.5px] border-[#222222]/10"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label="GrowWithHustler Home"
        >
          <div className="relative h-28 w-50">
            <Image
              src="/images/hero/GWH_LOGOU.png"
              alt="GrowWithHustler Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:block" aria-label="Main Navigation">
          <motion.ul
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-[32px]"
          >
            {NAV_ITEMS.map((item) => (
              <motion.li key={item.name} variants={navItemVariants}>
                <Link
                  href={item.href}
                  className="font-sans font-medium text-[15px] text-[#111111] hover:text-primary transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-4 py-2 link-underline"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Right CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-16">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            Let&apos;s Talk &rarr;
          </Link>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "default" }),
              "outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            View Our Work
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-button border-[1.5px] border-[#222222] bg-white text-[#111111] hover:bg-accent outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Slide-Down Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
            className="absolute top-[64px] md:top-[88px] left-0 right-0 w-full bg-[#F8F4E8] border-b-[1.5px] border-[#222222] shadow-soft overflow-hidden flex flex-col md:hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block font-sans font-medium text-[16px] text-[#111111] hover:text-primary transition-colors py-8 outline-none focus-visible:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <hr className="border-[#222222]/10" />

              <div className="flex flex-col sm:flex-row gap-12 w-full">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full justify-center text-center"
                  )}
                >
                  Let&apos;s Talk &rarr;
                </Link>
                <Link
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full justify-center text-center"
                  )}
                >
                  View Our Work
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
