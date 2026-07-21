import React from "react";
import { Heart } from "lucide-react";
import { bannerData } from "./bannerData";

const Banner: React.FC = () => {
  return (
    <section id="about" className="relative z-20 bg-[#062E55] text-white">
      {/* Smooth curved transition from Hero into Banner */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-full
          left-0
          z-30
          w-full
          overflow-hidden
        "
      >
        <svg
          viewBox="0 0 1920 100"
          preserveAspectRatio="none"
          className="block h-[64px] w-full"
          aria-hidden="true"
        >
          <defs>
            {/* Slight depth inside the navy curve */}
            <linearGradient
              id="bannerNavyGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#0B355D" />
              <stop offset="100%" stopColor="#062E55" />
            </linearGradient>

            {/* Soft shadow under gold curve */}
            <filter
              id="curveShadow"
              x="-10%"
              y="-40%"
              width="120%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="2.5"
                floodColor="#00162C"
                floodOpacity="0.42"
              />
            </filter>
          </defs>

          {/* Main navy shape */}
          <path
            d="
              M 0 73

              C 145 43,
                280 31,
                445 35

              C 610 39,
                725 61,
                930 64

              C 1135 67,
                1285 55,
                1460 52

              C 1640 49,
                1790 52,
                1920 35

              L 1920 100
              L 0 100
              Z
            "
            fill="url(#bannerNavyGradient)"
          />

          {/* Dark undershadow following the curve */}
          <path
            d="
              M 0 76

              C 145 46,
                280 34,
                445 38

              C 610 42,
                725 64,
                930 67

              C 1135 70,
                1285 58,
                1460 55

              C 1640 52,
                1790 55,
                1920 38
            "
            fill="none"
            stroke="#031B34"
            strokeWidth="8"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Main gold curved edge */}
          <path
            d="
              M 0 73

              C 145 43,
                280 31,
                445 35

              C 610 39,
                725 61,
                930 64

              C 1135 67,
                1285 55,
                1460 52

              C 1640 49,
                1790 52,
                1920 35
            "
            fill="none"
            stroke="#D49324"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#curveShadow)"
          />

          {/* Thin gold highlight */}
          <path
            d="
              M 0 71.5

              C 145 41.5,
                280 29.5,
                445 33.5

              C 610 37.5,
                725 59.5,
                930 62.5

              C 1135 65.5,
                1285 53.5,
                1460 50.5

              C 1640 47.5,
                1790 50.5,
                1920 33.5
            "
            fill="none"
            stroke="#F0B84D"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Banner content */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1500px]
          grid-cols-1
          px-6
          pb-5
          pt-4
          sm:grid-cols-2
          lg:grid-cols-5
          lg:px-12
        "
      >  
        {bannerData.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`
                relative
                flex
                min-h-[175px]
                flex-col
                items-center
                justify-center
                px-7
                py-4
                text-center

                ${
                  index !== bannerData.length - 1
                    ? "lg:border-r lg:border-[#C88A2A]/75"
                    : ""
                }
              `}
            >
              {/* Icon circle */}
              <div
                className="
                  mb-3
                  flex
                  h-[68px]
                  w-[68px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/80
                  bg-[#6B7C46]
                  shadow-[inset_0_2px_6px_rgba(255,255,255,0.18),0_5px_12px_rgba(0,0,0,0.18)]
                "
              >
                <Icon
                  size={39}
                  strokeWidth={1.7}
                  className="text-white"
                />
              </div>

              <h2 className="text-[13px] font-semibold uppercase tracking-[0.02em]">
                {item.title}
              </h2>

              <p className="mt-1.5 max-w-[165px] text-[11px] leading-[17px] text-white/90">
                {item.description}
              </p>

              <Heart
                size={14}
                className="mt-2.5 fill-[#D49324] text-[#D49324]"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;