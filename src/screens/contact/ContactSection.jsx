
import { useState } from "react";
import "../../pages/Contact/contact.css";

const helpOptions = [
  "Marketing Strategy",
  "Demand Generation",
  "Content & Visibility",
  "Digital PR",
  "Research",
  "Something Else",
];

const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      form.reportValidity();
      return;
    }

    // TODO: connect to backend / email service here
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
            Tell us what you’re trying to solve, understand or change. We’ll
            start there.
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Work Email</label>
              <input id="contact-email" name="email" type="email" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-help">What Can We Help With?</label>
              <select id="contact-help" name="help" required defaultValue="">
                <option value="">Select one</option>
                {helpOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-context">Your Context</label>
              <textarea id="contact-context" name="context" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-website">Optional Website</label>
              <input id="contact-website" name="website" type="url" />
            </div>

            <div className="contact-actions">
              <span aria-live="polite" className="contact-status">
                {status}
              </span>
              <button type="submit">Send Enquiry →</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactSection;