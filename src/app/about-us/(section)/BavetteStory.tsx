"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <motion.h2
          className="text-center font-oswald text-5xl text-[#CFAC6A] md:left-[15%] md:text-8xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          The Chadderton
          <br />
          Story
        </motion.h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="max-w-[500px] text-center font-oswald text-5xl text-[#CFAC6A] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#CFAC6A] md:text-start">
              What began as a love for quality British food has grown into{" "}
              <strong>The Chadderton Bar and Grill</strong>—a cherished dining
              destination where tradition meets modern culinary craftsmanship.
              Rooted in local flavours and guided by a passion for excellence,
              Chadderton was founded to celebrate the richness of British
              cuisine in a welcoming, contemporary setting. <br />
              From our early days to becoming a favourite for food lovers, our
              dedication to authenticity, flavour, and warm hospitality has
              never wavered. Every ingredient is locally sourced with care,
              every dish thoughtfully prepared, and every visit a reflection of
              our culinary values. <br />
              At Chadderton, we don’t just serve food—we share our love for
              heritage, comfort, and community. As we continue to evolve, our
              mission remains simple: to honour tradition, embrace innovation,
              and provide an unforgettable dining experience for every guest.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
