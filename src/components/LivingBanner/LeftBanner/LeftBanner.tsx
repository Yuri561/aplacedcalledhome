import React from "react";
import { Heart } from "lucide-react";
import { leftBannerData } from "./LeftBannerData";

const LeftBanner: React.FC = () => {
  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Section Badge */}
      <div className="mb-2 flex items-center gap-2">
        <Heart
          size={11}
          className="fill-[#C88A2A] text-[#C88A2A]"
        />

        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5B7041]">
          Living Made Easy
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-serif text-[24px] leading-tight text-[#0B2A4A]">
        Everything You Need. Right Where You{" "}
        <span className="text-[#C88A2A]">
          Need It.
        </span>
      </h2>

      {/* Image Cards */}
      <div className="mt-4 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {leftBannerData.map((item) => (
          <article
            key={item.id}
            className="group min-w-0"
          >
            <div className="overflow-hidden rounded-[10px] shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="h-[130px] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-2 flex items-start justify-center gap-1">
              {item.icon && (
                <span className="mt-[1px] shrink-0 text-[9px] text-[#5B7041]">
                  {item.icon}
                </span>
              )}

              <h3 className="text-center text-[16px] font-semibold leading-[12px] text-[#0B2A4A]">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LeftBanner;