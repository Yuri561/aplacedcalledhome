import React, { useEffect, useState } from "react";
import type { FormEvent } from "react";
// @ts-ignore: package may not have bundled type declarations in this environment
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Mail,
  Phone,
  User,
  X,
} from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  interestedFor: string;
  housingType: string;
  moveInTime: string;
  message: string;
};

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  interestedFor: "",
  housingType: "",
  moveInTime: "",
  message: "",
};

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] =
  useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setIsSubmitting(true);
  setSubmitError("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setSubmitError(
      "The contact form is not configured correctly. Please try again later.",
    );
    setIsSubmitting(false);
    return;
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        interestedFor: formData.interestedFor,
        housingType: formData.housingType || "Not specified",
        moveInTime: formData.moveInTime || "Not specified",
        message: formData.message || "No additional message provided",
      },
      {
        publicKey,
      },
    );

    setIsSubmitted(true);
    setFormData(initialFormData);
  } catch (error) {
    console.error("EmailJS submission failed:", error);

    setSubmitError(
      "We could not send your information. Please try again in a moment.",
    );
  } finally {
    setIsSubmitting(false);
  }
};

  const handleClose = () => {
    onClose();

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 transition duration-300 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close contact form"
        onClick={handleClose}
        className="absolute inset-0 bg-[#061C31]/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        className={`relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#FFFDF8] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition duration-300 ${
          isOpen
            ? "translate-y-0 scale-100"
            : "translate-y-5 scale-95"
        }`}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-[#0B2A4A] px-6 py-7 text-white sm:px-8">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#C88A2A]/20 blur-3xl" />

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close contact modal"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={21} />
          </button>

          <div className="relative pr-12">
            <div className="mb-3 flex items-center gap-2 text-[#E5A12C]">
              <Heart size={16} fill="currentColor" />

              <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                We Are Here to Help
              </span>
            </div>

            <h2
              id="contact-modal-title"
              className="font-serif text-3xl leading-tight sm:text-4xl"
            >
              Let&apos;s Find the Right Living Option
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Tell us a little about what you need. A member of our team
              will review your information and reach out to you.
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="flex min-h-[430px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6B7C46]/10">
              <CheckCircle2
                size={44}
                className="text-[#6B7C46]"
                strokeWidth={1.7}
              />
            </div>

            <h3 className="mt-6 font-serif text-3xl text-[#0B2A4A]">
              Thank You for Reaching Out
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
              Your information has been received. A member of the A Place
              Called Home team will contact you as soon as possible.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-7 rounded-md bg-[#C88A2A] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#A96F1C]"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 px-5 py-7 sm:grid-cols-2 sm:px-8 sm:py-8"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                Full Name <span className="text-[#C88A2A]">*</span>
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7C46]"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full rounded-md border border-[#DED7CC] bg-white py-3.5 pl-11 pr-4 text-sm text-[#30343B] outline-none transition placeholder:text-gray-400 focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                Email Address <span className="text-[#C88A2A]">*</span>
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7C46]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-[#DED7CC] bg-white py-3.5 pl-11 pr-4 text-sm text-[#30343B] outline-none transition placeholder:text-gray-400 focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                Phone Number <span className="text-[#C88A2A]">*</span>
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7C46]"
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 555-5555"
                  className="w-full rounded-md border border-[#DED7CC] bg-white py-3.5 pl-11 pr-4 text-sm text-[#30343B] outline-none transition placeholder:text-gray-400 focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="interestedFor"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                Who Is Housing For?{" "}
                <span className="text-[#C88A2A]">*</span>
              </label>

              <select
                id="interestedFor"
                name="interestedFor"
                required
                value={formData.interestedFor}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#DED7CC] bg-white px-4 py-3.5 text-sm text-[#30343B] outline-none transition focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
              >
                <option value="">Select an option</option>
                <option value="myself">Myself</option>
                <option value="family-member">A family member</option>
                <option value="client">A client</option>
                <option value="friend">A friend</option>
                <option value="other">Someone else</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="housingType"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                Type of Support Needed
              </label>

              <select
                id="housingType"
                name="housingType"
                value={formData.housingType}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#DED7CC] bg-white px-4 py-3.5 text-sm text-[#30343B] outline-none transition focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
              >
                <option value="">Select an option</option>
                <option value="independent-living">
                  Independent living
                </option>
                <option value="senior-housing">Senior housing</option>
                <option value="veteran-housing">Veteran housing</option>
                <option value="returning-citizen">
                  Returning citizen housing
                </option>
                <option value="displaced-adult">
                  Housing for a displaced adult
                </option>
                <option value="unsure">I am not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="moveInTime"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                Preferred Move-In Time
              </label>

              <select
                id="moveInTime"
                name="moveInTime"
                value={formData.moveInTime}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#DED7CC] bg-white px-4 py-3.5 text-sm text-[#30343B] outline-none transition focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
              >
                <option value="">Select a timeframe</option>
                <option value="immediately">Immediately</option>
                <option value="within-30-days">Within 30 days</option>
                <option value="within-60-days">Within 60 days</option>
                <option value="within-90-days">Within 90 days</option>
                <option value="researching">Just researching</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0B2A4A]"
              >
                How Can We Help?
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your housing needs, questions, or any support you are looking for."
                className="w-full resize-none rounded-md border border-[#DED7CC] bg-white px-4 py-3.5 text-sm leading-6 text-[#30343B] outline-none transition placeholder:text-gray-400 focus:border-[#C88A2A] focus:ring-2 focus:ring-[#C88A2A]/15"
              />
            </div>

            <div className="sm:col-span-2">
  <button
    type="submit"
    disabled={isSubmitting}
    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#0B2A4A] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#123C67] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
  >
    {isSubmitting ? "Sending..." : "Submit Information"}

    {!isSubmitting && <ArrowRight size={16} />}
  </button>

  {submitError && (
    <p
      role="alert"
      className="mt-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
    >
      {submitError}
    </p>
  )}

  <p className="mt-3 text-[11px] leading-5 text-gray-500">
    By submitting this form, you agree to be contacted regarding housing
    options and related services.
  </p>
</div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;