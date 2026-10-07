// src/pages/Contact/Contact.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import { toServiceSlug } from "../../utils/serviceSlug";
const helpOptions = [
  "Lead Generation",
  "Pipeline Audit",
  "Researched Lead Lists",
  "Website Audit",
  "Channel Performance Audit",
  "AI Readiness (GEO) Audit",
  "Paid Search Advertising",
  "Paid Social Campaigns",
  "Conversion Rate Optimization",
  "Creative Asset Production",
  "Content Plan",
  "Visibility Audit",
  "Sample Newsletter",
  "Campaign Strategy Call",
  "Social Plan", 
  "Webinar Plan",
  "Video Production",
  "Podcast Options",
  "Community Plan",
  "Reputation Audit",
  "Retargeting Plan",
  "Tracking Audit",
  "Explore Affiliate"
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required."),name: z
  .string()
  .trim()
  .min(1, "Name is required.")
  .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Name must contain only letters."),  email: z
    .string()
    .trim()
    .min(1, "Work email is required.")
    .email("Enter a valid email."),
  company: z.string().trim().min(1, "Company is required."),
  help: z.string().min(1, "Please select one."),
  context: z.string().trim().min(1, "Tell us a bit of context."),
  website: z.string().trim().optional().or(z.literal("")),
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");
  const requestedHelp = searchParams.get("help");
  const requestedServiceSlug = requestedService
    ? toServiceSlug(requestedService)
    : "";
  const selectedHelp =
    helpOptions.find((option) => toServiceSlug(option) === requestedServiceSlug) ??
    (helpOptions.includes(requestedHelp) ? requestedHelp : "");

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      help: selectedHelp,
    },
  });

  useEffect(() => {
    resetField("help", { defaultValue: selectedHelp });
  }, [selectedHelp, resetField]);

  const handleCancel = () => {
    reset();
    setStatus("");
  };

  const onSubmit = (data) => {
    console.log(data);
    setStatus(
      "Thanks"
    );
  };

  return (
    <div className="bg-[#f3f1eb] font-sans text-[#111318]">
      <main className="px-[4vw] py-[40px] sm:py-[60px] lg:py-[100px] max-[760px]:px-5">

        
        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-[7vw] max-[760px]:grid-cols-1 max-[760px]:gap-[65px]">
          <div className="sticky top-[3vw] max-[760px]:static">
   
            <div className="font-mono text-[12px] tracking-[0.12em] uppercase">
              <SectionTitle>
              Contact
              </SectionTitle>
            </div>

            <h1 className="m-0 mt-6 mb-[2.5vw] max-w-[1050px] text-[clamp(56px,9vw,145px)] leading-[0.88] tracking-[-0.065em] max-[760px]:mt-5 max-[760px]:mb-[40px] max-[760px]:text-[clamp(54px,18vw,90px)]">
              Start with
              <br />
              the question.
            </h1>

            <div className="max-w-[540px] text-[clamp(22px,2.4vw,38px)] leading-[1.12]">
              Tell us what you're trying to solve, understand or change. We'll
              start there.
            </div>
          </div>

          <form
            className="w-full border-t border-[#111318]"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className="border-b border-[#111318]/[0.18] py-5 focus-within:border-[#111318]">
              <label
                className="mb-[9px] block text-[13px] tracking-[0.08em] uppercase"
                htmlFor="contact-name"
              >
                Name
              </label>

              <input
                id="contact-name"
                className={`w-full border-0 bg-transparent text-[17px] outline-none [font-family:inherit] ${
                  errors.name ? "text-[#c0392b]" : "text-[#111318]"
                }`}
                {...register("name")}
              />

              {errors.name && (
                <span className="mt-[6px] block text-[11px] text-[#c0392b]">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="border-b border-[#111318]/[0.18] py-5 focus-within:border-[#111318]">
              <label
                className="mb-[9px] block text-[13px] tracking-[0.08em] uppercase"
                htmlFor="contact-email"
              >
                Work Email
              </label>

              <input
                id="contact-email"
                type="email"
                className={`w-full border-0 bg-transparent text-[17px] outline-none [font-family:inherit] ${
                  errors.email ? "text-[#c0392b]" : "text-[#111318]"
                }`}
                {...register("email")}
              />

              {errors.email && (
                <span className="mt-[6px] block text-[11px] text-[#c0392b]">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="border-b border-[#111318]/[0.18] py-5 focus-within:border-[#111318]">
              <label
                className="mb-[9px] block text-[13px] tracking-[0.08em] uppercase"
                htmlFor="contact-company"
              >
                Company
              </label>

              <input
                id="contact-company"
                className={`w-full border-0 bg-transparent text-[17px] outline-none [font-family:inherit] ${
                  errors.company ? "text-[#c0392b]" : "text-[#111318]"
                }`}
                {...register("company")}
              />

              {errors.company && (
                <span className="mt-[6px] block text-[11px] text-[#c0392b]">
                  {errors.company.message}
                </span>
              )}
            </div>


            <div className="border-b border-[#111318]/[0.18] py-5 focus-within:border-[#111318]">
              <label
                className="mb-[9px] block text-[13px] tracking-[0.08em] uppercase"
                htmlFor="contact-help"
              >
                What Can We Help With?
              </label>

              <select
                id="contact-help"
                className={`w-full cursor-pointer appearance-none border-0 bg-transparent text-[17px] focus:outline-offset-2 [font-family:inherit] [&]:accent-[#a604d6] ${
                  errors.help ? "text-[#c0392b]" : "text-[#111318]"
                }`}
                {...register("help")}
              >
                <option
                  value=""
                  disabled
                  className="bg-[#f3f1eb] px-3 py-2 text-[#111318] checked:text-[#111318] hover:text-[#111318]"
                >
                  Select one
                </option>

                {helpOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-[#f3f1eb] px-3 py-2 text-[#111318] checked:bg-[#f3f1eb] checked:text-[#111318] hover:text-[#111318]"
                  >
                    {option}
                  </option>
                ))}
              </select>

              {errors.help && (
                <span className="mt-[6px] block text-[11px] text-[#c0392b]">
                  {errors.help.message}
                </span>
              )}
            </div>
            <div className="border-b border-[#111318]/[0.18] py-5 focus-within:border-[#111318]">
              <label
                className="mb-[9px] block text-[13px] tracking-[0.08em] uppercase"
                htmlFor="contact-context"
              >
                Your Context
              </label>

              <textarea
                id="contact-context"
                className={`min-h-[130px] w-full resize-y border-0 bg-transparent text-[17px] outline-none [font-family:inherit] ${
                  errors.context ? "text-[#c0392b]" : "text-[#111318]"
                }`}
                {...register("context")}
              />

              {errors.context && (
                <span className="mt-[6px] block text-[11px] text-[#c0392b]">
                  {errors.context.message}
                </span>
              )}
            </div>

            <div className="border-b border-[#111318]/[0.18] py-5 focus-within:border-[#111318]">
              <label
                className="mb-[9px] block text-[13px] tracking-[0.08em] uppercase"
                htmlFor="contact-website"
              >
                Optional Website
              </label>

              <input
                id="contact-website"
                type="url"
                className={`w-full border-0 bg-transparent text-[17px] outline-none [font-family:inherit] ${
                  errors.website ? "text-[#c0392b]" : "text-[#111318]"
                }`}
                {...register("website")}
              />

              {errors.website && (
                <span className="mt-[6px] block text-[14px] text-[#c0392b]">
                  {errors.website.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-5 pt-6 max-[760px]:flex-wrap">
              <span
                aria-live="polite"
                className="min-h-4 font-mono text-[11px]"
              >
                {status}
              </span>

              <div className="flex items-center gap-3">
                <button
                  className="cursor-pointer border-0 bg-[#111318] px-[23px] py-[15px] text-white transition-colors duration-[250ms] hover:bg-[#b400e8]"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="cursor-pointer border-0 bg-[#111318] px-[23px] py-[15px] text-white transition-colors duration-[250ms] hover:bg-[#b400e8]"
                  type="submit"
                >
                  Send Enquiry →
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;