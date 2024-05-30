"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Image from "next/image";

import MobileNav from "./mobile-nav";

interface MainNavProps {
  items: NavItem[];
}

const MainNav = ({ items }: MainNavProps) => {
  return (
    <div className="w-full flex items-center justify-between  gap-6 md:gap-10">
      <Link href="/">
        <Image src="/logo.png" alt="wise-forge" width={80} height={80} />
      </Link>

      <nav className="hidden gap-6 md:flex">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <MobileNav />
    </div>
  );
};

export default MainNav;
