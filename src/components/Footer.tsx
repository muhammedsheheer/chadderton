"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000]">
      <div className="h-[1px] w-full border-b-[1px] border-b-[#CFAC6A]" />
      <div className="flex flex-col gap-4 px-4 pt-12 md:gap-6 lg:px-10 lg:pt-24">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-28 md:w-32"
            />
          </Link>
        </div>
        {/*big screen */}
        <div className="hidden flex-row items-center justify-center gap-40 md:flex">
          <div className="flex flex-col items-center justify-center gap-3 md:items-start">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Home{" "}
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Menu{" "}
            </Link>
            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Contact us{" "}
            </Link>
            <Link
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Our Story{" "}
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Booking{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div>
              <span className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#CFAC6A]">
                Contact{" "}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={"https://g.co/kgs/f4zBAMn"}
                target="_blank"
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                422 Middleton Rd, Chadderton, <br /> Oldham OL9 6PY, UK
              </Link>
              <Link
                href={"mailto:chaddertongrill@gmail.com"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                chaddertongrill@gmail.com
              </Link>
              <Link
                href={"tele:+01616524666"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                0161 652 4666
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Opening hours
            </Link>
            <p className="font-open_sans text-center text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
              Monday-Thursday 12pm-10pm
              <br />
              Friday-Saturday 12pm-10:30pm
              <br />
              Sunday 12pm-11pm
            </p>
          </div>
        </div>
        {/* mobile screen */}

        <div className="flex flex-col gap-4 md:hidden md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-col items-start justify-start gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            <div className="flex flex-col items-start justify-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Home{" "}
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Menu{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact us{" "}
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Our Story{" "}
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Booking{" "}
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Link
                href={"https://g.co/kgs/f4zBAMn"}
                target="_blank"
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                422 Middleton Rd, Chadderton, <br /> Oldham OL9 6PY, UK
              </Link>
              <Link
                href={"mailto:chaddertongrill@gmail.com"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                chaddertongrill@gmail.com
              </Link>
              <Link
                href={"tele:+01616524666"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                0161 652 4666
              </Link>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-b-[#CFAC6A]" />
          <div className="flex w-full flex-col items-center justify-center gap-8 pt-6 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]">
                Opening hours
              </span>
              <p className="font-open_sans text-center text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
                Monday-Thursday 12pm-10pm
                <br />
                Friday-Saturday 12pm-10:30pm
                <br />
                Sunday 12pm-11pm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/chadderton_bar_grill/"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://www.facebook.com/Chadderton.Bar.and.Grill"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.facebook />
          </Link>
          <Link
            href={
              "https://www.tripadvisor.co.uk/Restaurant_Review-g503931-d7194605-Reviews-Chadderton_Bar_and_Grill-Chadderton_Lancashire_England.html"
            }
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.unknown />
          </Link>
          <Link
            href={"https://g.co/kgs/f4zBAMn"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.google />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="font-open_sans text-center text-xs font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
              © 2025 Chadderton , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="font-open_sans text-center text-xs font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-1 h-[1px] w-full border-b-[1px] border-b-[#CFAC6A]" />
    </footer>
  );
};

export default Footer;
