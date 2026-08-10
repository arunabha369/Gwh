"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
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
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full h-[72px] sm:h-[104px] lg:h-[112px] flex items-center bg-transparent transition-all duration-300",
        isScrolled && "bg-background/90 backdrop-blur-md border-b-[1.5px] border-[#222222]/10 shadow-xs"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Left: Logo (aligned to left boundary) */}
        <Link
          href="/"
          className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg -ml-1 sm:-ml-2"
          aria-label="GrowWithHustler Home"
        >
          <div className="relative h-[56px] w-40 sm:h-[88px] sm:w-60 lg:h-[120px] lg:w-72">
            <Image
              src="/images/hero/GWH_LOGOU.png"
              alt="GrowWithHustler Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden lg:block" aria-label="Main Navigation">
          <motion.ul
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-7 xl:gap-9"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <motion.li key={item.name} variants={navItemVariants}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-sans font-semibold text-[14.5px] text-[#111111] hover:text-primary transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2.5 py-1 relative",
                      isActive && "font-bold text-primary"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute -bottom-1 left-2.5 right-2.5 h-[2.5px] bg-primary rounded-full"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        {/* Right CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "text-[13.5px] font-bold px-5 py-2.5 bg-white text-[#111111] border-[1.5px] border-[#222222] hover:bg-[#F5F2EB] shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            Let&apos;s Talk &rarr;
          </Link>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-[13.5px] font-bold px-5 py-2.5 bg-[#FFD43B] text-[#111111] border-[1.5px] border-[#222222] hover:bg-[#F7CB2D] shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            View Our Work
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-lg border-[1.5px] border-[#222222] bg-white text-[#111111] hover:bg-accent outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="absolute top-[72px] sm:top-[104px] lg:top-[112px] left-0 right-0 w-full bg-[#F8F4E8] border-b-[1.5px] border-[#222222] shadow-soft overflow-hidden flex flex-col md:hidden"
          >
            <Container className="py-6 flex flex-col gap-5">
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block font-sans font-semibold text-[15px] text-[#111111] hover:text-primary transition-colors py-1.5 outline-none focus-visible:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <hr className="border-[#222222]/10" />

              <div className="flex flex-col sm:flex-row gap-3 w-full pb-2">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full justify-center text-center font-bold bg-white border-[1.5px] border-[#222222]"
                  )}
                >
                  Let&apos;s Talk &rarr;
                </Link>
                <Link
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full justify-center text-center font-bold bg-[#FFD43B] border-[1.5px] border-[#222222]"
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
