import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 pt-12 md:px-[50px] md:pt-20 2xl:px-[100px]">
      {/* big screen */}
      <div className="hidden flex-col gap-5 md:flex">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <motion.div
              className="w-full md:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/follow/1.jpg"}
                width={5987}
                height={3991}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-5 md:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Link
                href={"https://www.instagram.com/chadderton_bar_grill/"}
                target="_blank"
              >
                <Image
                  src={"/images/home/follow/insta.svg"}
                  width={160}
                  height={160}
                  alt="logo"
                  className="w-20"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/chadderton_bar_grill/"}
                target="_blank"
                className="font-poppins text-md text-center font-[400] uppercase text-[#CFAC6A] md:text-xl"
              >
                @chadderton_bar_grill
              </Link>
            </motion.div>
            <motion.div
              className="w-full md:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/follow/2.jpg"}
                width={5987}
                height={3991}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/follow/3.jpg"}
                width={5987}
                height={3991}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
            </div>
            <motion.div
              className="w-full md:w-[50%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/follow/4.jpg"}
                width={5987}
                height={3991}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>

            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
            </div>
          </div>
        </div>
      </div>
      {/*mobile screen */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        <motion.div
          className="w-full md:w-[25%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {" "}
          <Image
            src={"/images/home/follow/1.jpg"}
            width={5987}
            height={3991}
            alt="logo"
            className="h-[180px] w-full object-cover md:h-[350px]"
          />
        </motion.div>
        <motion.div
          className="flex w-full flex-col items-center justify-center gap-5 md:w-[25%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {" "}
          <Link
            href={"https://www.instagram.com/chadderton_bar_grill/"}
            target="_blank"
          >
            <Image
              src={"/images/home/follow/insta.svg"}
              width={160}
              height={160}
              alt="logo"
              className="w-20"
            />
          </Link>
          <Link
            href={"https://www.instagram.com/chadderton_bar_grill/"}
            target="_blank"
            className="font-poppins text-center text-xs font-[400] uppercase text-[#CFAC6A] md:text-xl"
          >
            @chadderton_bar_grill
          </Link>
        </motion.div>
        <motion.div
          className="w-full md:w-[25%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {" "}
          <Image
            src={"/images/home/follow/2.jpg"}
            width={5987}
            height={3991}
            alt="logo"
            className="h-[180px] w-full object-cover md:h-[350px]"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-[25%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {" "}
          <Image
            src={"/images/home/follow/3.jpg"}
            width={5987}
            height={3991}
            alt="logo"
            className="h-[180px] w-full object-cover md:h-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Follow;
