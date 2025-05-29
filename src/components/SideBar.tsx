"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => setShowSubMenu((prev) => !prev);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image src="/images/logo.png" width={162} height={35} alt="Foodo" />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-center p-0 font-playfair text-3xl font-normal text-accent text-white"
            >
              Home
            </Link>
            <button
              onClick={toggleSubMenu}
              className="flex w-full justify-center p-0 font-playfair text-3xl font-normal text-accent text-white"
            >
              <span>Menu</span>
            </button>

            {showSubMenu && (
              <div className="ml-6 flex w-full flex-col gap-6 pb-4 text-sm text-white">
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-accent text-white"
                  href={"/pdf/main-menu.pdf"}
                  target="_blank"
                >
                  Main Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-accent text-white"
                  href={"/pdf/A la carte menu.pdf"}
                  target="_blank"
                >
                  A la carte Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-accent text-white"
                  href={"/pdf/cocktail-menu.pdf"}
                  target="_blank"
                >
                  Cocktail Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-accent text-white"
                  href={"/pdf/dessert-menu.pdf"}
                  target="_blank"
                >
                  Dessert Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-accent text-white"
                  href={"/pdf/Kids menu.pdf"}
                  target="_blank"
                >
                  Kids Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-accent text-white"
                  href={"/pdf/Midweek market menu.pdf"}
                  target="_blank"
                >
                  Midweek Market Menu
                </Link>
              </div>
            )}
            <Link
              href="/about-us"
              className="flex w-full justify-center p-0 font-playfair text-3xl font-normal text-accent text-white"
            >
              Our Story
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-center p-0 font-playfair text-3xl font-normal text-accent text-white"
            >
              Order Online
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-center p-0 font-playfair text-3xl font-normal text-accent text-white"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-center p-0 font-playfair text-3xl font-normal text-accent text-white"
            >
              Table Booking
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
