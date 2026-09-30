// src/pages/Contact/Contact.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../../screens/contact/Contact.css";

const helpOptions = [
  "Marketing Strategy",
  "Demand Generation",
  "Content & Visibility",
  "Digital PR",
  "Research",
  "Something Else",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().min(1, "Work email is required.").email("Enter a valid email."),
  company: z.string().trim().min(1, "Company is required."),
  help: z.string().min(1, "Please select one."),
  context: z.string().trim().min(1, "Tell us a bit of context."),
  website: z.string().trim().url("Include http:// or https://").optional().or(z.literal("")),
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    // TODO: connect to backend / email service here — data is already validated
    console.log(data);
    setStatus("Thanks — your enquiry is ready to be sent to hello@mdna.digital.");
  };

  return (
    <div className="contact-page">
      <main className="contact-main">
        <div className="contact-eyebrow">Contact</div>
        <h1 className="contact-title">
          Start with
          <br />
          the question.
        </h1>

        <section className="contact-grid">
          <div className="contact-statement">
            Tell us what you're trying to solve, understand or change. We'll
            start there.
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className={`contact-field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" {...register("name")} />
              {errors.name && <span className="contact-error">{errors.name.message}</span>}
            </div>

            <div className={`contact-field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="contact-email">Work Email</label>
              <input id="contact-email" type="email" {...register("email")} />
              {errors.email && <span className="contact-error">{errors.email.message}</span>}
            </div>

            <div className={`contact-field ${errors.company ? "has-error" : ""}`}>
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" {...register("company")} />
              {errors.company && <span className="contact-error">{errors.company.message}</span>}
            </div>

            <div className={`contact-field ${errors.help ? "has-error" : ""}`}>
              <label htmlFor="contact-help">What Can We Help With?</label>
              <select id="contact-help" defaultValue="" {...register("help")}>
                <option value="" disabled>Select one</option>
                {helpOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.help && <span className="contact-error">{errors.help.message}</span>}
            </div>

            <div className={`contact-field ${errors.context ? "has-error" : ""}`}>
              <label htmlFor="contact-context">Your Context</label>
              <textarea id="contact-context" {...register("context")} />
              {errors.context && <span className="contact-error">{errors.context.message}</span>}
            </div>

            <div className={`contact-field ${errors.website ? "has-error" : ""}`}>
              <label htmlFor="contact-website">Optional Website</label>
              <input id="contact-website" type="url" {...register("website")} />
              {errors.website && <span className="contact-error">{errors.website.message}</span>}
            </div>

            <div className="contact-actions">
              <span aria-live="polite" className="contact-status">{status}</span>
              <button type="submit">Send Enquiry →</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;