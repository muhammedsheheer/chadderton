const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] bg-[url('/images/about-us/6.jpg')] bg-cover bg-center bg-no-repeat text-[1.5rem] leading-[110%]"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Content */}
      <h1 className="relative z-10 w-full text-center font-oswald text-[4.75rem] leading-[80%] text-white drop-shadow-lg">
        Table Booking
      </h1>
    </section>
  );
};

export default Hero;
