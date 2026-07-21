import React from "react";
import { ArrowRight, Heart } from "lucide-react";

const LeftContent: React.FC = () => {
  return (
    <div className="flex max-w-md flex-col justify-center ">
      {/* Section Badge */}
      <div className="mb-5 flex items-center gap-3">
        <Heart
          size={14}
          className="fill-[#C88A2A] text-[#C88A2A]"
        />

        <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#5B7041]">
          About Us
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-serif text-5xl leading-tight text-[#0B2A4A]">
        Building a Stronger
        <br />

        Community{" "}

        <span className="text-[#C88A2A]">
          Together.
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-[17px] leading-8 text-[#555555]">
        A Place Called Home Independent Living is dedicated to
        providing more than just a place to stay. We build a caring
        community where individuals in transition can heal, grow,
        and thrive with dignity and respect.
      </p>

      {/* CTA */}
      <button
        className="
          mt-8
          flex
          w-fit
          items-center
          gap-3
          rounded-md
          bg-[#5B7041]
          px-7
          py-4
          text-sm
          font-semibold
          uppercase
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#6B7C46]
          hover:shadow-lg
        "
      >
        Learn Our Story

        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default LeftContent;