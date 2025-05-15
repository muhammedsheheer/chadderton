"use client";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const PrivateAndGroupDining = ({}) => {
  return (
    <section className="flex h-screen w-full items-center justify-center px-4 pt-12 lg:px-10 lg:pt-20">
      <div
        className="relative flex h-full w-full flex-col-reverse items-center justify-center gap-4 rounded-3xl md:flex-row"
        style={{
          backgroundImage: `url('/images/home/reserve.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="z-20 flex h-full w-full flex-col items-start justify-center gap-[2.5rem] p-6 lg:px-32">
          <h3 className="dining-title -ml-[50px] font-oswald uppercase">
            Booking
          </h3>
          <h1 className="dining-head max-w-[500px] font-oswald text-6xl font-bold sm:text-7xl md:text-start">
            Private &<br />
            Group Dining
          </h1>
          <p className="dining-description mt-[10px] hidden max-w-[500px] font-light leading-[160%] text-white md:flex md:text-start">
            At The Chadderton Bar and Grill, our private and group dining spaces
            offer the ideal setting for any occasion — from birthdays and family
            celebrations to business lunches and special events. Thoughtfully
            designed to offer both comfort and privacy, each area allows you and
            your guests to relax and enjoy every moment. With bespoke menus and
            attentive, personalised service, we ensure your experience is
            smooth, stress-free, and truly memorable — no matter the size of
            your gathering.
          </p>
          <Link href="/table-booking">
            <Button className="dining-button mt-[10px] flex items-center justify-center gap-3 rounded-none bg-white px-6 py-7 font-oswald font-extrabold text-black">
              Book Now <MoveRight className="text-primary" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivateAndGroupDining;
