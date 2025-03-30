"use client";

import { useState, FormEvent } from "react";
import socialConfig from "@/config/social";

type ServiceType = "Development" | "Founder & Partner" | "Consulting";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    serviceType: "Development" as ServiceType,
    projectCategory: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceTypeChange = (type: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: type,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        message: "",
        serviceType: "Development",
        projectCategory: "",
        budget: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-[0_20px_80px_-10px_rgba(0,0,0,0.5)] border border-gray-800/20 backdrop-blur-[2px] bg-[#0c0c11]/95">
      {/* Left Form Column */}
      <div className="p-8 lg:p-12 flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Type Radio Options */}
          <div className="flex flex-wrap gap-6 mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="serviceType"
                className="sr-only"
                checked={formData.serviceType === "Development"}
                onChange={() => handleServiceTypeChange("Development")}
              />
              <span
                className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center border ${
                  formData.serviceType === "Development"
                    ? "border-white"
                    : "border-gray-500"
                }`}
              >
                {formData.serviceType === "Development" && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
              <span className="text-sm">Development</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="serviceType"
                className="sr-only"
                checked={formData.serviceType === "Founder & Partner"}
                onChange={() => handleServiceTypeChange("Founder & Partner")}
              />
              <span
                className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center border ${
                  formData.serviceType === "Founder & Partner"
                    ? "border-white"
                    : "border-gray-500"
                }`}
              >
                {formData.serviceType === "Founder & Partner" && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
              <span className="text-sm">Founder & Partner</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="serviceType"
                className="sr-only"
                checked={formData.serviceType === "Consulting"}
                onChange={() => handleServiceTypeChange("Consulting")}
              />
              <span
                className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center border ${
                  formData.serviceType === "Consulting"
                    ? "border-white"
                    : "border-gray-500"
                }`}
              >
                {formData.serviceType === "Consulting" && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
              <span className="text-sm">Consulting</span>
            </label>
          </div>

          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Full name"
                required
              />
            </div>

            <div className="space-y-1">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Email"
                required
              />
            </div>
          </div>

          {/* Project Category and Budget Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <select
                id="projectCategory"
                name="projectCategory"
                value={formData.projectCategory}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 appearance-none cursor-pointer"
                required
              >
                <option value="" disabled className="bg-[#111111]">
                  Project category
                </option>
                <option value="Website" className="bg-[#111111]">
                  Website
                </option>
                <option value="Mobile App" className="bg-[#111111]">
                  Mobile App
                </option>
                <option value="Web Application" className="bg-[#111111]">
                  Web Application
                </option>
                <option value="Design" className="bg-[#111111]">
                  Design
                </option>
                <option value="Other" className="bg-[#111111]">
                  Other
                </option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-1">
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 appearance-none cursor-pointer"
                required
              >
                <option value="" disabled className="bg-[#111111]">
                  Budget
                </option>
                <option value="$1,000 - $5,000" className="bg-[#111111]">
                  $1,000 - $5,000
                </option>
                <option value="$5,000 - $10,000" className="bg-[#111111]">
                  $5,000 - $10,000
                </option>
                <option value="$10,000 - $25,000" className="bg-[#111111]">
                  $10,000 - $25,000
                </option>
                <option value="$25,000+" className="bg-[#111111]">
                  $25,000+
                </option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 resize-none"
              placeholder="Message"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-8 mt-8 bg-transparent text-white border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden"
          >
            <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
              Send message
            </span>
            {isSubmitting && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            )}
          </button>
        </form>

        {/* Status message */}
        {submitStatus && (
          <div
            className={`mt-4 p-4 rounded-md ${
              submitStatus.success
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            <p>{submitStatus.message}</p>
          </div>
        )}

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-4">
            <a
              href={socialConfig.linkedin}
              className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={socialConfig.github}
              className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Visual Column */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden border-l border-gray-800/40">
        <div className="absolute inset-0">
          {/* Background image with colorful abstract visual */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Abstract colorful visualization"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          </div>

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-grid mix-blend-soft-light opacity-20"></div>

          {/* Noise texture */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
