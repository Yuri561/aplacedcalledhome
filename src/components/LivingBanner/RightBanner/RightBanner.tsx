import React, { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import {
  rightBannerData,
  type Testimonial,
} from "./RightBannerData";

const AUTOPLAY_DELAY = 6000;

const RightBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const currentTestimonial: Testimonial =
    rightBannerData[currentIndex];

  useEffect(() => {
    if (isPaused || rightBannerData.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === rightBannerData.length - 1
          ? 0
          : previousIndex + 1
      );
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-[#EAE6DC] px-5 py-4 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        key={currentTestimonial.id}
        className="animate-[testimonialFade_500ms_ease-out]"
      >
        {/* Quote icon */}
        <Quote
          size={26}
          strokeWidth={2.2}
          className="mb-2 fill-[#C88A2A] text-[#C88A2A]"
        />

        {/* Testimonial */}
        <p className="min-h-[72px] max-w-[205px] font-serif text-[15px] leading-6 text-[#0B2A4A]">
          {currentTestimonial.quote}
        </p>

        {/* Name and role */}
        <div className="mt-3 pr-20">
          <h3 className="text-[12px] font-semibold text-[#0B2A4A]">
            — {currentTestimonial.author}
          </h3>

          <p className="mt-0.5 text-[10px] text-[#5B7041]">
            {currentTestimonial.role}
          </p>
        </div>

        {/* Stars */}
        <div
          className="mt-2 flex items-center gap-1"
          aria-label={`${currentTestimonial.rating} out of 5 stars`}
        >
          {Array.from(
            { length: currentTestimonial.rating },
            (_, index) => (
              <Star
                key={index}
                size={12}
                className="fill-[#C88A2A] text-[#C88A2A]"
              />
            )
          )}
        </div>

        {/* Resident image */}
        <div className="absolute bottom-5 right-4 h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-[#C88A2A]/50 bg-[#EAE6DC] shadow-md">
          <img
            src={currentTestimonial.image}
            alt={`${currentTestimonial.author}, ${currentTestimonial.role}`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Slider dots */}
      <div className="mt-3 flex justify-center gap-1.5 pr-16">
        {rightBannerData.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => handleDotClick(index)}
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={
              index === currentIndex ? "true" : undefined
            }
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-4 bg-[#0B2A4A]"
                : "w-1.5 bg-[#B9B7B0] hover:bg-[#C88A2A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RightBanner;