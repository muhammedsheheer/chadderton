"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-20 md:px-[50px] md:py-24 lg:px-[100px] 2xl:px-[140px]">
      <div className="absolute inset-0 z-10 flex justify-center md:top-16">
        <h1
          className="px-4 font-oswald text-7xl font-[400] uppercase md:mt-10 md:block md:text-[17vw]"
          style={{
            background:
              "linear-gradient(180deg, #CCAD64 -14.03%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Chadderton
        </h1>
      </div>
      <div className="relative z-40 flex w-full flex-col gap-8 md:flex-row md:gap-4 md:pt-56">
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={"/images/home/menu/1.jpg"}
            width={5987}
            height={3991}
            alt="1"
            className="h-[300px] w-full object-cover lg:h-[450px]"
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            Chicken Caesar
          </h3>
        </div>
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={"/images/home/menu/2.jpg"}
            width={5987}
            height={3991}
            alt="2"
            className="h-[300px] w-full object-cover lg:h-[450px]"
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            Spaghetti Marinara
          </h3>
        </div>
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={"/images/home/menu/3.jpg"}
            width={5987}
            height={3991}
            alt="3"
            className="h-[300px] w-full object-cover lg:h-[450px]"
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            Mushroom Risotto
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Menu;
