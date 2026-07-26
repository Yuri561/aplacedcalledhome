import React from "react";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const FooterMain: React.FC = () => {
  return (
    <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-7 py-7 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr_1.2fr] lg:px-8">
      {/* Brand */}
      <div>
        <img
          src="/logo.png"
          alt="A Place Called Home"
          className="h-auto rounded-full w-[170px]"
        />

        <p className="mt-3 max-w-[190px] text-[10px] leading-4 text-white/75">
          A community. A home.
          <br />
          A better life.
        </p>

        <div className="mt-4 flex gap-3">
          {[Mail].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 transition hover:border-[#C88A2A] hover:text-[#C88A2A]"
              >
                <Icon size={14} />
              </a>
            )
          )}
        </div>
      </div>

      {/* Quick links */}
      <div>
        <h3 className="text-xs font-semibold uppercase">
          Quick Links
        </h3>

        <ul className="mt-3 space-y-1.5 text-[10px] text-white/75">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xs font-semibold uppercase">
          Our Services
        </h3>

        <ul className="mt-3 space-y-1.5 text-[10px] text-white/75">
          <li>Private Rooms</li>
          <li>Shared Rooms</li>
          <li>Furnished Living</li>
          <li>Utilities Included</li>
          <li>Support Services</li>
          <li>Community Support</li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-xs font-semibold uppercase">
          Resources
        </h3>

        <ul className="mt-3 space-y-1.5 text-[10px] text-white/75">
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xs font-semibold uppercase">
          Contact Us
        </h3>

        <div className="mt-3 space-y-3 text-[10px] text-white/80">
          <div className="flex items-start gap-2">
            <Phone
              size={14}
              className="mt-0.5 shrink-0 text-[#C88A2A]"
            />
            <span>305-788-4340</span>
          </div>

          <div className="flex items-start gap-2">
            <Mail
              size={14}
              className="mt-0.5 shrink-0 text-[#C88A2A]"
            />
            <span>aplacecalledhome4@gmail.com</span>
          </div>

          <div className="flex items-start gap-2">
            <MapPin
              size={14}
              className="mt-0.5 shrink-0 text-[#C88A2A]"
            />

            <span>
              A Place Called Home
              <br />
              Independent Living
              <br />
              Palm Beach County, Florida
            </span>
          </div>
        </div>

        <p className="mt-4 text-[10px] font-semibold text-[#C88A2A]">
          Safe. Affordable.
          <br />
          Respectful. Supportive.
        </p>
      </div>
    </div>
  );
};

export default FooterMain;