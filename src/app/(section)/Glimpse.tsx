"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Glimpse = ({}) => {
  return (
    <section className="h-full w-full bg-[#000]">
      <div className="flex flex-col gap-6 md:flex-row md:gap-24">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={"/images/reserve.jpg"}
            width={5987}
            height={3991}
            alt="logo"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="flex w-full flex-col items-center justify-center gap-4 pb-8 md:w-1/2 md:pb-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex h-full w-full flex-col items-start justify-center gap-4 px-4 md:px-0">
            <h1
              className="px-4 text-start font-oswald text-4xl font-[400] uppercase md:text-5xl"
              style={{
                background:
                  "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Private & <br />
              Group Dining
            </h1>
            <p className="ml-3 w-full max-w-[600px] font-manrope text-base font-[300] tracking-[0.54px] text-[#C1B6A6] md:ml-5">
              At The Chadderton Bar and Grill, our private and group dining
              spaces offer the ideal setting for any occasion — from birthdays
              and family celebrations to business lunches and special events.
              Thoughtfully designed to offer both comfort and privacy, each area
              allows you and your guests to relax and enjoy every moment. With
              bespoke menus and attentive, personalised service, we ensure your
              experience is smooth, stress-free, and truly memorable — no matter
              the size of your gathering.
            </p>
            <Link
              className="ml-3 flex flex-row gap-1 rounded-none bg-transparent px-6 py-4 text-[#fff] ring-1 ring-[#D5A859] hover:bg-[#D5A859] md:ml-5"
              href={"/table-booking"}
            >
              {" "}
              Book now <ArrowRight className="text-[#BC995D]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Glimpse;
