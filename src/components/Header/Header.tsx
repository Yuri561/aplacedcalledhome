import React, { useEffect, useState } from "react";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import ContactModal from "../ContactModal/ContactModal";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openContactModal = () => {
    setIsMenuOpen(false);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <nav className="relative h-16 border-b border-[#ECE8E2] bg-white sm:h-20">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0">
            <a
              href="/"
              onClick={closeMenu}
              className="flex shrink-0 items-center"
            >
              <img
                src="/logo.png"
                alt="A Place Called Home Independent Living"
                className="h-12 w-auto object-contain sm:h-16 lg:h-[72px]"
              />
            </a>

            <div className="hidden items-center gap-5 lg:flex xl:gap-8">
              {navLinks.map(({ title, link }, index) => (
                <a
                  key={title}
                  href={link}
                  className={`relative whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-[#C88A2A] xl:text-[12px] ${
                    index === 0
                      ? "text-[#0B2A4A] after:absolute after:-bottom-3 after:left-0 after:h-[2px] after:w-full after:bg-[#C88A2A]"
                      : "text-[#0B2A4A]"
                  }`}
                >
                  {title}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={openContactModal}
              className="hidden items-center gap-2 rounded-md bg-[#C88A2A] px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A96F1C] hover:shadow-md lg:flex xl:px-5 xl:text-[12px]"
            >
              Get in Touch
              <Heart size={14} fill="currentColor" />
            </button>

            <button
              type="button"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E7DED0] text-[#0B2A4A] transition hover:border-[#C88A2A] hover:text-[#C88A2A] lg:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className={`fixed inset-0 top-16 z-40 bg-[#0B2A4A]/35 backdrop-blur-[2px] transition-opacity duration-300 sm:top-20 lg:hidden ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />

          <div
            id="mobile-navigation"
            className={`absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-[#ECE8E2] bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
              isMenuOpen
                ? "max-h-[620px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }`}
          >
            <div className="px-4 py-5 sm:px-6">
              <div className="flex flex-col">
                {navLinks.map(({ title, link }, index) => (
                  <a
                    key={title}
                    href={link}
                    onClick={closeMenu}
                    className={`flex items-center justify-between border-b border-[#ECE8E2] py-4 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[#C88A2A] ${
                      index === 0
                        ? "text-[#C88A2A]"
                        : "text-[#0B2A4A]"
                    }`}
                  >
                    <span>{title}</span>
                    <ArrowRight size={18} className="text-[#C88A2A]" />
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={openContactModal}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#C88A2A] px-5 py-4 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#A96F1C]"
              >
                Get in Touch
                <Heart size={15} fill="currentColor" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </>
  );
};

export default Header;