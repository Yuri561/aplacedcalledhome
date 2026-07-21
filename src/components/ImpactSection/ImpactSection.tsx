import React from "react";
import ImpactStats from "./ImpactStats/ImpactStats";
import ApplicationCTA from "./ApplicationCTA/ApplicationCTA";

const ImpactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F3EFE6]">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:px-8">
        <ImpactStats />
        <ApplicationCTA />
      </div>
    </section>
  );
};

export default ImpactSection;