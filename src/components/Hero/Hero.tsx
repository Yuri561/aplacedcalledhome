import React from "react";
import {
  ShieldCheck,
  Home,
  Users,
  ArrowRight,
  CalendarDays,
  Heart,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8]">
      <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[45%_55%] xl:grid-cols-[42%_58%]">
        {/* LEFT SIDE */}
        <div className="relative z-20 order-2 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:order-1 lg:px-10 lg:py-14 xl:pl-16 xl:pr-8">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 opacity-[0.05] sm:w-36">
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_left,_#6B7C46_0%,_transparent_65%)]" />
          </div>

          {/* Badge */}
          <div className="relative mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
            <Heart
              size={13}
              className="shrink-0 fill-[#C88A2A] text-[#C88A2A]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#425C35] sm:text-xs md:text-sm">
              Welcome to a Place Called Home
            </span>
          </div>

          {/* Heading */}
          <h1 className="relative max-w-[620px] font-serif text-[38px] leading-[1.08] text-[#0B2A4A] min-[400px]:text-[42px] sm:text-5xl md:text-[54px] lg:text-[50px] xl:text-[58px]">
            More Than Housing.
            <br />

            <span className="text-[#C88A2A]">A Place to Belong.</span>
          </h1>

          {/* Description */}
          <p className="relative mt-5 max-w-[520px] text-sm leading-6 text-[#30343B] sm:mt-6 sm:text-base sm:leading-7">
            We provide safe, affordable, and supportive housing for displaced
            adults, seniors, veterans, returning citizens, and low-income
            individuals.
          </p>

          {/* Buttons */}
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-4 rounded-md bg-[#0B2A4A] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#123C67] sm:w-auto sm:px-6 sm:py-4 sm:text-xs"
            >
              Explore Our Services
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-md border border-[#C88A2A] bg-white/70 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-[#0B2A4A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFF8EC] sm:w-auto sm:px-6 sm:py-4 sm:text-xs"
            >
              <CalendarDays size={17} className="text-[#C88A2A]" />
              Schedule a Tour
            </button>
          </div>

          {/* Features */}
          <div className="relative mt-8 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-3 sm:gap-0">
            <div className="flex items-center gap-3 rounded-md bg-white/40 p-3 sm:rounded-none sm:bg-transparent sm:p-0 sm:pr-4">
              <ShieldCheck
                className="shrink-0 text-[#6B7C46]"
                size={30}
                strokeWidth={1.6}
              />

              <div>
                <h3 className="text-xs font-semibold text-[#0B2A4A]">
                  Safe &amp; Secure
                </h3>

                <p className="mt-1 text-xs text-gray-600">Environment</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-md bg-white/40 p-3 sm:rounded-none sm:border-l sm:border-[#D7B47A] sm:bg-transparent sm:px-4">
              <Home
                className="shrink-0 text-[#6B7C46]"
                size={30}
                strokeWidth={1.6}
              />

              <div>
                <h3 className="text-xs font-semibold text-[#0B2A4A]">
                  Affordable
                </h3>

                <p className="mt-1 text-xs text-gray-600">Living Options</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-md bg-white/40 p-3 sm:rounded-none sm:border-l sm:border-[#D7B47A] sm:bg-transparent sm:pl-4">
              <Users
                className="shrink-0 text-[#6B7C46]"
                size={30}
                strokeWidth={1.6}
              />

              <div>
                <h3 className="text-xs font-semibold text-[#0B2A4A]">
                  Supportive
                </h3>

                <p className="mt-1 text-xs text-gray-600">Community</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative order-1 min-h-[430px] sm:min-h-[500px] lg:order-2 lg:min-h-[620px]">
          <img
            src="/livingroom.jpg"
            alt="Comfortable and welcoming shared living room"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Image shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 lg:from-black/10" />

          {/* Desktop blend into left content */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[180px] bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent lg:block xl:w-[220px]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[280px] bg-gradient-to-r from-[#FFFDF8]/40 to-transparent blur-xl lg:block xl:w-[320px]" />

          {/* Mobile bottom blend */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#FFFDF8] to-transparent lg:hidden" />

          {/* FLOATING CARD */}
          <div className="absolute bottom-5 left-4 right-4 z-20 rounded-[10px] border border-[#071B31] bg-[#062B50] px-4 py-4 text-white shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:bottom-6 sm:left-auto sm:right-6 sm:w-[400px] sm:px-5 sm:py-5 lg:bottom-8 lg:right-7 lg:w-[430px]">
            <div className="flex items-stretch gap-4 sm:gap-5">
              {/* Door Icon */}
              <div className="flex w-[65px] shrink-0 items-center justify-center border-r border-[#C88A2A]/55 pr-3 sm:w-[82px] lg:w-[92px]">
                <img
                  src="/door-open.png"
                  alt="Open door icon"
                  className="h-auto max-h-[120px] w-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg leading-tight text-white sm:text-[21px] lg:text-[23px]">
                  A Place to Call Home.
                </h3>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#E5A12C] sm:text-base sm:leading-6 lg:text-[17px]">
                  Safe. Comfortable.
                  <br />
                  Supportive.
                </p>

                <div className="my-3 h-px w-full bg-[#C88A2A]/70" />

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Heart
                    size={14}
                    className="shrink-0 fill-[#E5A12C] text-[#E5A12C]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.04em] text-white sm:text-[10px] lg:text-[11px]">
                    You Are Not Alone.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;