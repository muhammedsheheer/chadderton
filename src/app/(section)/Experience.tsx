"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = ({}) => {
  return (
    <section className="relative h-full w-full bg-[#111] px-4 py-12 md:px-24 md:py-20">
      <div className="flex flex-col gap-12 md:gap-20">
        <div>
          <motion.h2
            className="text-center font-oswald text-4xl font-[400] capitalize text-[#FBEAD2] md:text-6xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            UNFORGETTABLE EXPERIENCE
          </motion.h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FOOD
                </h1>
              </div>
              <Image
                src={"/images/home/experience/6.jpg"}
                width={5987}
                height={3991}
                alt="1"
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </motion.div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
              At The Chadderton Bar and Grill, food is more than just a meal —
              it`s a carefully crafted experience. Our chefs bring together
              locally sourced, seasonal ingredients to create dishes that are as
              wholesome as they are delicious.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  DRINKS{" "}
                </h1>
              </div>
              <Image
                src={"/images/home/experience/5.jpg"}
                width={5987}
                height={3991}
                alt="2"
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </motion.div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
              At The Chadderton Bar and Grill, our drinks menu is crafted to
              complement every occasion. Enjoy a fine selection of wines,
              locally brewed ales, craft beers, and expertly mixed cocktails —
              all served with style. Whether you`re celebrating or simply
              unwinding, we’ve got the perfect pour waiting for you.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ATMOSPHERE{" "}
                </h1>
              </div>
              <Image
                src={"/images/home/experience/3.jpg"}
                width={5987}
                height={3991}
                alt="3"
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </motion.div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
              Step into The Chadderton Bar and Grill, where comfort meets style.
              With cosy interiors, friendly service, and a relaxed vibe, it’s
              the perfect spot for everything from casual lunches to special
              evenings out. Whether you`re dining with loved ones or catching up
              with friends, you’ll feel right at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
