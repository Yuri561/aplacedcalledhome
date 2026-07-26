import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ContactModal from "../../ContactModal/ContactModal";

const benefits = [
  "Easy Application Process",
  "Flexible Move-In Options",
  "Supportive Staff",
];

const ApplicationCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6 border-t border-[#C88A2A]/35 pt-6 lg:flex-row lg:items-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      <div className="flex-1">
        <h2 className="font-serif text-[20px] uppercase leading-tight text-[#0B2A4A]">
          Looking for a safe place to call home?
        </h2>

        <p className="mt-1 text-[12px] text-[#0B2A4A]">
          We’re here to help you every step of the way.
        </p>

        <div className="mt-3 flex flex-col gap-1.5">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2"
            >
              <CheckCircle2
                size={14}
                className="fill-[#5B7041] text-white"
              />

              <span className="text-[11px] text-[#0B2A4A]">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 flex items-center gap-4 rounded-md bg-[#0B2A4A] px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#123C67]"
        >
          Start Your Application
          <ArrowRight size={15} />

        </button>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <div className="flex h-[126px] w-[126px] shrink-0 items-center justify-center rounded-full border-2 border-[#C88A2A] text-center">
        <div>
          <p className="font-serif text-[15px] uppercase leading-5 text-[#C88A2A]">
            Dignity
            <br />
            Respect
            <br />
            Hope
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCTA;