import React from "react";

const TopHeader: React.FC = () => {
  return (
    <div className="w-full  h-10 bg-[#0B2A4A] text-white">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-8 xl:px-0">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C88A2A]">♥</span>

            <span className="text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
              A COMMUNITY. A HOME. A BETTER LIFE.
            </span>
          </div>

          <div className="w-px h-5 bg-[#C88A2A]" />

          <span className="text-[13px] text-white/80 whitespace-nowrap">
            Serving Veterans, Seniors, and Adults in Transition
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <span className="text-[#C88A2A]">📞</span>

          <span className="text-[13px] font-medium">
            Call Us 305-788-4340
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;