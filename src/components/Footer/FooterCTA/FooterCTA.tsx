import React, { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Phone,
} from "lucide-react";
import ContactModal from "../../ContactModal/ContactModal";

const FooterCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="border-b border-white/20">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {/* Left message */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/60">
            <CalendarDays
              size={28}
              className="text-white"
            />
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Come See It for Yourself
            </h2>

            <p className="mt-1 text-[11px] leading-4 text-white/80">
              Schedule a tour today and discover the comfort,
              <br className="hidden sm:block" />
              community, and care waiting for you.
            </p>
          </div>
        </div>

        {/* Tour button */}
        <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-4 rounded-md bg-[#C88A2A] px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#D89A39]">
          Schedule Your Tour
          <ArrowRight size={15} />
        </button>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Contact info */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="hidden h-12 w-px bg-white/25 lg:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60">
              <Phone size={18} />
            </div>

            <div>
              <p className="text-[10px] text-white/70">
                Call Us
              </p>

              <p className="text-xs font-semibold">
                305-788-4340
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-[10px] text-white/70">
                Visit Us
              </p>

              <p className="text-xs font-semibold">
                Get Directions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;