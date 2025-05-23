"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <motion.div
              className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="font-oswald text-5xl font-semibold text-[#CFAC6A] lg:text-6xl">
                Welcome to Chadderton <br /> A Culinary Tradition Redefined
              </h1>
              <p className="font-manrope font-normal text-[#CFAC6A]">
                At The Chadderton Bar and Grill, we take pride in celebrating
                the essence of classic British cuisine, reimagined with modern
                flair. Every dish is prepared using locally sourced ingredients,
                carefully selected herbs, and timeless cooking techniques to
                deliver a truly memorable dining experience. Whether you`re
                enjoying our signature grilled specials or indulging in a
                comforting seasonal favourite, each bite reflects our commitment
                to quality, tradition, and genuine hospitality.
              </p>
            </motion.div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <motion.img
              src="/images/about-us/2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
