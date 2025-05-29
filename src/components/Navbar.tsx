"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Rotation animation
    tl.to(".table-button", {
      rotation: 360, // Full rotation
      duration: 10, // Time for one rotation
      ease: "linear", // Consistent rotation speed
      repeat: -1, // Infinite rotation
    });
  }, [isScrolled]);
  const [positioned, setPositioned] = React.useState("bottom");

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex h-[12vh] w-full flex-col items-center bg-transparent p-4 transition-all duration-0 ease-in-out`,
        isScrolled && "h-[12vh] bg-black",
      )}
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-2">
        <div
          className={cn(
            "flex h-full w-full items-center justify-between md:justify-center",
            isScrolled || (pathname !== "/" && "items-center"),
          )}
        >
          <Link className="w-40 md:hidden" href="/">
            <Image src="/images/logo.png" width={188} height={56} alt="logo" />
          </Link>
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-[#fff]"
            >
              <Link href="/">Home</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="px-0 uppercase text-[#fff]" variant="link">
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuRadioGroup
                  value={positioned}
                  onValueChange={setPositioned}
                >
                  <DropdownMenuRadioItem value="Menu">
                    <Link className="uppercase text-[#000]" href={"/menu"}>
                      Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="Main Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/main-menu.pdf"}
                      target="_blank"
                    >
                      Main Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="A la carte Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/A la carte menu.pdf"}
                      target="_blank"
                    >
                      A la carte Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="Cocktail Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/cocktail-menu.pdf"}
                      target="_blank"
                    >
                      Cocktail Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="Dessert Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/dessert-menu.pdf"}
                      target="_blank"
                    >
                      Dessert Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="Kids Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/Kids menu.pdf"}
                      target="_blank"
                    >
                      Kids Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="Midweek Market Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/Midweek market menu.pdf"}
                      target="_blank"
                    >
                      Midweek Market Menu
                    </Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={188}
                height={56}
                alt="logo"
              />
            </Link>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-[#fff]"
            >
              <Link href="/about-us">Our Story</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-[#fff]"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
