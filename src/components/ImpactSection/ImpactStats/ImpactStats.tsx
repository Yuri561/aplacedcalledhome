import React from "react";
import { impactStatsData } from "./ImpactStatsData";

const ImpactStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      {impactStatsData.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`flex flex-col items-center px-4 text-center ${
              index !== impactStatsData.length - 1
                ? "lg:border-r lg:border-[#C88A2A]/35"
                : ""
            }`}
          >
            <Icon
              size={34}
              strokeWidth={1.8}
              className={item.color}
            />

            <h3 className="mt-2 font-serif text-[27px] leading-none text-[#0B2A4A]">
              {item.value}
            </h3>

            <p className="mt-1 text-[11px] text-[#0B2A4A]">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ImpactStats;