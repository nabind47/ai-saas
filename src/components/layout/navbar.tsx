"use client";

import { cn } from "@/lib/utils";

import { navItems } from "@/config/nav";
import useScroll from "@/hooks/use-scroll";

import MainNav from "./main-nav";

const Navbar = () => {
  const scrolled = useScroll(50);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all",
        scrolled && "border-b"
      )}
    >
      <div className="container flex h-[60px] items-center justify-between py-4">
        <MainNav items={navItems} />
      </div>
    </header>
  );
};

export default Navbar;
