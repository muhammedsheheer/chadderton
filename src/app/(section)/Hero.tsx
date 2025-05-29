"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = ({}) => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0 z-0 bg-black/50"></div>
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="https://d8q1b3smcycac.cloudfront.net/chadderation/chadderation-web.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="https://d8q1b3smcycac.cloudfront.net/chadderation/chadderation-thumbnail.png"
          ></video>
        </div>
        <div className="z-40 flex h-full w-full items-center justify-center">
          <motion.div
            className="flex w-full flex-col items-center justify-center gap-7"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1
              className="text-center font-oswald text-4xl font-[400] uppercase tracking-[8px] sm:text-5xl md:text-8xl"
              style={{
                background:
                  "linear-gradient(194deg, #CDAE64 50.51%, #050504 117.48%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WELCOME <br />
              TO chadderton
            </h1>
            <div className="z-40 flex flex-row gap-4">
              <div className="ml-[2%] flex flex-col items-center justify-center gap-3">
                <Link href="/table-booking">
                  <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-popover px-7 py-7 uppercase">
                    Book now
                  </Button>
                </Link>
              </div>
              <div className="ml-[2%] flex flex-col items-center justify-center gap-3">
                <Link href="/menu">
                  <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-popover px-7 py-7 uppercase">
                    Order now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
