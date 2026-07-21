import React from "react";
import FooterCTA from "./FooterCTA/FooterCTA";
import FooterMain from "./FooterMain/FooterMain";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-8xl bg-[#062B50] text-white">
      <FooterCTA />
      <FooterMain />
    </footer>
  );
};

export default Footer;