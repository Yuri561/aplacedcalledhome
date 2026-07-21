import React from "react";
import LeftBanner from "./LeftBanner/LeftBanner";
import RightBanner from "./RightBanner/RightBanner";

const LivingBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFDF8]">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:px-8">
        {/* Left Column */}
        <LeftBanner />

        {/* Right Column */}
        <RightBanner />
      </div>
    </section>
  );
};

export default LivingBanner;