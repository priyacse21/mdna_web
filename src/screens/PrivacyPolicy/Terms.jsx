import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f3f1eb] font-sans text-[#111318]">
      <main className="mx-auto max-w-[900px] px-[4vw] py-[40px] sm:py-[60px] lg:py-[100px] max-[760px]:px-5">
        {/* Header */}
        <div className="mb-[60px] max-w-[900px]">
          <div className="font-mono text-[12px] tracking-[0.12em] uppercase">
   
          </div>

          <h1 className="m-0 mt-6 mb-[2vw] text-[clamp(42px,7vw,110px)] leading-[0.92] tracking-[-0.055em] max-[760px]:mt-5 max-[760px]:mb-[30px] max-[760px]:text-[clamp(36px,12vw,64px)]">
            Terms &amp;
            <br />
            Conditions
          </h1>

          <p className="mt-[18px] inline-block rounded px-4 py-[6px] bg-[rgba(16,22,29,0.05)] font-mono text-[13px] tracking-[0.04em] text-[#6b7580]">
            Last Updated: January 2025
          </p>
        </div>
        

        {/* Content */}
        <article
          className="mx-auto w-full max-w-[820px] [&_.terms-section]:mb-9 [&_.terms-section]:border-b [&_.terms-section]:border-[rgba(16,22,29,0.1)] [&_.terms-section]:pb-9 [&_.terms-section:last-child]:mb-0 [&_.terms-section:last-child]:border-b-0 [&_.terms-h2]:m-0 [&_.terms-h2]:mb-[18px] [&_.terms-h2]:font-['Manrope',Arial,sans-serif] [&_.terms-h2]:text-[clamp(24px,3vw,36px)] [&_.terms-h2]:font-extrabold [&_.terms-h2]:leading-[1.15] [&_.terms-h2]:tracking-[-0.03em] [&_.terms-h2]:text-[#10161d] [&_.terms-h3]:mt-7 [&_.terms-h3]:mb-3 [&_.terms-h3]:font-['Manrope',Arial,sans-serif] [&_.terms-h3]:text-[clamp(17px,2vw,22px)] [&_.terms-h3]:font-bold [&_.terms-h3]:leading-[1.3] [&_.terms-h3]:text-[#10161d] [&_p]:m-0 [&_p]:mb-[14px] [&_p]:text-[clamp(15px,1.6vw,17px)] [&_p]:leading-[1.7] [&_p]:text-[#333a42] [&_.terms-list]:mt-2 [&_.terms-list]:mb-[14px] [&_.terms-list]:list-disc [&_.terms-list]:pl-[22px] [&_.terms-list_li]:mb-[10px] [&_.terms-list_li]:text-[clamp(15px,1.6vw,17px)] [&_.terms-list_li]:leading-[1.65] [&_.terms-list_li]:text-[#333a42] [&_.terms-list_strong]:font-bold [&_.terms-list_strong]:text-[#10161d] [&_.terms-link]:border-b [&_.terms-link]:border-transparent [&_.terms-link]:text-[#a604d6] [&_.terms-link]:no-underline [&_.terms-link]:transition-[border-color,color] [&_.terms-link]:duration-[250ms] [&_.terms-link]:ease-[ease] [&_.terms-link:hover]:border-[#bd00f2] [&_.terms-link:hover]:text-[#bd00f2] max-[760px]:[&_.terms-section]:mb-7 max-[760px]:[&_.terms-section]:pb-7"
        >
          {/* Introduction */}
          <section className="terms-section" id="terms-introduction">
            <h2 className="terms-h2">Introduction</h2>
            <p>
              Welcome to mDNA Digital ("mDNA," "we," "us," or "our"). These
              Terms and Conditions ("Terms") govern your use of our website at{" "}
              <a
                href="https://mdna.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="terms-link"
              >
                mdna.digital
              </a>{" "}
              (the "Site") and our growth marketing and go-to-market (GTM)
              services (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Site or Services, you ("you," "your," or
              "Client") agree to be bound by these Terms. If you do not agree to
              these Terms, please do not use our Site or Services.
            </p>
          </section>

          <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(135deg,rgba(189,0,242,0.14),rgba(189,0,242,0.07),rgba(189,0,242,0.02))] px-6 py-10 sm:px-10">
            <div className="mx-auto w-full max-w-[820px]">
              {/* About mDNA */}
              <section className="terms-section !border-0" id="terms-about">
                <h2 className="terms-h2">About mDNA</h2>
                <p>
                  mDNA is a growth marketing and GTM execution company that
                  provides modular, execution-ready marketing solutions including
                  branding, account-based marketing (ABM), product marketing,
                  performance marketing, and GenAI-powered marketing execution
                  services.
                </p>
              </section>

              {/* Services Description */}
            <div className="absolute middle-[50%] right-[-4%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
              <section className="terms-section" id="terms-services">
                <h2 className="terms-h2">Services Description</h2>

                <h3 className="terms-h3">Core Services</h3>
                <p>We provide the following primary services:</p>
                <ul className="terms-list">
                  <li>
                    <strong>Branding Services:</strong> Brand development and
                    positioning
                  </li>
                  <li>
                    <strong>Account-Based Marketing (ABM):</strong> Targeted B2B
                    marketing campaigns
                  </li>
                  <li>
                    <strong>Product Marketing:</strong> Product positioning,
                    messaging, and launch strategies
                  </li>
                  <li>
                    <strong>Performance Marketing:</strong> Data-driven marketing
                    campaigns optimized for conversion
                  </li>
                  <li>
                    <strong>GenAI-Powered Execution:</strong> AI-enhanced marketing
                    automation and optimization
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Client Responsibilities */}
          <section className="terms-section" id="terms-client-responsibilities">
            <h2 className="terms-h2">Client Responsibilities</h2>

            <h3 className="terms-h3">Information and Access</h3>
            <p>You agree to:</p>
            <ul className="terms-list">
              <li>
                Provide accurate, complete, and timely information necessary for
                service delivery
              </li>
              <li>
                Grant necessary access to your marketing platforms, analytics
                tools, and systems as required
              </li>
              <li>
                Respond to requests for feedback and approvals within agreed
                timeframes
              </li>
              <li>
                Maintain confidentiality of any proprietary methodologies or
                strategies shared by mDNA
              </li>
            </ul>

            <h3 className="terms-h3">Content and Materials</h3>
            <ul className="terms-list">
              <li>
                You are responsible for providing accurate product information,
                brand guidelines, and marketing materials
              </li>
              <li>
                You warrant that all content provided does not infringe on
                third-party rights
              </li>
              <li>
                You grant mDNA permission to use your content for service
                delivery purposes
              </li>
            </ul>
          </section>

          {/* Service Agreements and Payments */}
          <section
            className="terms-section relative left-1/2 w-screen -translate-x-1/2 !border-0 !bg-[linear-gradient(135deg,rgba(189,0,242,0.14),rgba(189,0,242,0.07),rgba(189,0,242,0.02))] !px-6 !py-10 sm:!px-10"
            id="terms-payments"
          >
            <div className="mx-auto w-full max-w-[820px]">
            <h2 className="terms-h2">Service Agreements and Payments</h2>

            <h3 className="terms-h3">Project Scope</h3>
            <ul className="terms-list">
              <li>
                Specific service scope, deliverables, timelines, and pricing are
                outlined in individual project agreements or statements of work
                (SOW)
              </li>
              <li>
                Any changes to agreed scope require written approval and may
                incur additional charges
              </li>
            </ul>

            <h3 className="terms-h3">Payment Terms</h3>
            <ul className="terms-list">
              <li>
                Payment terms are specified in individual project agreements
              </li>
              <li>
                Late payments may incur interest charges and may result in
                service suspension
              </li>
              <li>
                All fees are non-refundable unless otherwise specified in writing
              </li>
            </ul>

            <h3 className="terms-h3">Cancellation</h3>
            <ul className="terms-list">
              <li>
                Either party may terminate services with written notice as
                specified in individual agreements
              </li>
              <li>
                Client remains liable for all work completed and expenses
                incurred up to the termination date
              </li>
            </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <div className="absolute middle-[50%] left-[-2%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
          <section className="terms-section" id="terms-ip">
            <h2 className="terms-h2">Intellectual Property</h2>

            <h3 className="terms-h3">mDNA IP</h3>
            <ul className="terms-list">
              <li>
                mDNA retains ownership of all proprietary methodologies,
                frameworks, tools, and processes
              </li>
              <li>
                Clients receive a non-exclusive license to use deliverables for
                their internal business purposes
              </li>
              <li>
                mDNA reserves the right to use general knowledge and experience
                gained from projects for future engagements
              </li>
            </ul>

            <h3 className="terms-h3">Client IP</h3>
            <ul className="terms-list">
              <li>
                Clients retain ownership of their existing intellectual property,
                trademarks, and brand assets
              </li>
              <li>
                Clients grant mDNA a limited license to use their IP for service
                delivery purposes during the engagement period
              </li>
            </ul>

            <h3 className="terms-h3">Work Product</h3>
            <ul className="terms-list">
              <li>
                Unless otherwise specified, deliverables created specifically for
                Client become Client property upon full payment
              </li>
              <li>
                mDNA may retain and use anonymized data and insights for
                benchmarking and service improvement
              </li>
            </ul>
          </section>

          {/* Confidentiality */}
          <section className="terms-section" id="terms-confidentiality">
            <h2 className="terms-h2">Confidentiality</h2>
            <p>Both parties agree to maintain confidentiality of:</p>
            <ul className="terms-list">
              <li>Proprietary business information</li>
              <li>Strategic plans and marketing data</li>
              <li>Customer information and trade secrets</li>
              <li>Any information marked as confidential</li>
            </ul>
            <p>
              This obligation survives termination of services and continues for
              a period of three (3) years.
            </p>
          </section>

          {/* Performance and Results */}
             <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(135deg,rgba(189,0,242,0.14),rgba(189,0,242,0.07),rgba(189,0,242,0.02))] px-6 py-10 sm:px-10">
            <div className="mx-auto w-full max-w-[820px]">
          <section className="terms-section" id="terms-performance">
            <h2 className="terms-h2">Performance and Results</h2>

            <h3 className="terms-h3">Best Efforts</h3>
            <ul className="terms-list">
              <li>
                mDNA will provide services using professional best practices and
                industry standards
              </li>
              <li>
                While we aim for optimal results, marketing outcomes depend on
                various factors beyond our control
              </li>
            </ul>

            <h3 className="terms-h3">No Guarantees</h3>
            <ul className="terms-list">
              <li>
                We do not guarantee specific marketing results, lead volumes, or
                conversion rates
              </li>
              <li>
                Performance projections are estimates based on historical data
                and industry benchmarks
              </li>
              <li>
                External factors including market conditions, competition, and
                platform changes may affect results
              </li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="terms-section" id="terms-indemnification">
            <h2 className="terms-h2">Indemnification</h2>
            <p>
              Client agrees to indemnify and hold mDNA harmless from any claims,
              damages, or expenses arising from:
            </p>
            <ul className="terms-list">
              <li>Client's use of deliverables or services</li>
              <li>
                Infringement of third-party rights by Client-provided content
              </li>
              <li>
                Client's violation of these Terms or applicable laws
              </li>
            </ul>
          </section>
             </div>
          </div>

          {/* Force Majeure */}
        <div className="absolute middle-[50%] right-[2%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
          <section className="terms-section" id="terms-force-majeure">
            <h2 className="terms-h2">Force Majeure</h2>
            <p>
              Neither party shall be liable for delays or failures in
              performance due to circumstances beyond their reasonable control,
              including natural disasters, government actions, labor disputes, or
              technical failures.
            </p>
          </section>

          {/* Platform and Technology Terms */}
          <section className="terms-section" id="terms-platform">
            <h2 className="terms-h2">Platform and Technology Terms</h2>

            <h3 className="terms-h3">Third-Party Platforms</h3>
            <ul className="terms-list">
              <li>
                Services may involve third-party marketing platforms (Google Ads,
                LinkedIn, HubSpot, etc.)
              </li>
              <li>
                Client is responsible for compliance with third-party platform
                terms and policies
              </li>
              <li>
                mDNA is not liable for platform policy changes or account
                suspensions
              </li>
            </ul>

            <h3 className="terms-h3">Data and Analytics</h3>
            <ul className="terms-list">
              <li>
                We use various analytics and tracking tools to measure campaign
                performance
              </li>
              <li>
                Data collection and use are governed by our{" "}
                <Link to="/privacy-policy" className="terms-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                Client grants permission for necessary data access and tracking
                implementation
              </li>
            </ul>
          </section>

          {/* Compliance and Legal */}
             <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(135deg,rgba(189,0,242,0.14),rgba(189,0,242,0.07),rgba(189,0,242,0.02))] px-6 py-10 sm:px-10">
            <div className="mx-auto w-full max-w-[820px]">
          <section className="terms-section" id="terms-compliance">
            <h2 className="terms-h2">Compliance and Legal</h2>

            <h3 className="terms-h3">Regulatory Compliance</h3>
            <ul className="terms-list">
              <li>
                Both parties agree to comply with applicable laws and regulations
              </li>
              <li>
                Client warrants that their business practices comply with
                relevant advertising and marketing regulations
              </li>
              <li>
                mDNA follows industry best practices for data protection and
                marketing compliance
              </li>
            </ul>

            <h3 className="terms-h3">Changes to Services</h3>
            <ul className="terms-list">
              <li>
                mDNA reserves the right to modify or discontinue services with
                reasonable notice
              </li>
              <li>
                Significant changes will be communicated in writing with
                transition assistance provided
              </li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="terms-section" id="terms-dispute">
            <h2 className="terms-h2">Dispute Resolution</h2>

            <h3 className="terms-h3">Governing Law</h3>
            <p>
              These Terms are governed by the laws of the jurisdiction where mDNA
              is incorporated, without regard to conflict of law principles.
            </p>

            <h3 className="terms-h3">Dispute Process</h3>
            <ul className="terms-list">
              <li>
                Parties agree to first attempt resolution through good faith
                negotiation
              </li>
              <li>
                If unresolved, disputes shall be settled through binding
                arbitration
              </li>
              <li>
                Venue for any legal proceedings shall be at mDNA's principal
                office location
              </li>
            </ul>
          </section>
             </div>
          </div>

          {/* General Provisions */}
          <div className="absolute middle-[50%] left-[-4%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
          <section className="terms-section" id="terms-general">
            <h2 className="terms-h2">General Provisions</h2>

            <h3 className="terms-h3">Entire Agreement</h3>
            <p>
              These Terms, together with individual project agreements,
              constitute the entire agreement between the parties and supersede
              all prior communications and agreements.
            </p>

            <h3 className="terms-h3">Modifications</h3>
            <ul className="terms-list">
              <li>These Terms may be updated periodically</li>
              <li>
                Material changes will be communicated via email or website notice
              </li>
              <li>
                Continued use of services after changes constitutes acceptance
              </li>
            </ul>

            <h3 className="terms-h3">Severability</h3>
            <p>
              If any provision of these Terms is found unenforceable, the
              remaining provisions shall continue in full force and effect.
            </p>

            <h3 className="terms-h3">Assignment</h3>
            <ul className="terms-list">
              <li>These Terms bind successors and assigns</li>
              <li>
                mDNA may assign these Terms in connection with a merger,
                acquisition, or sale of assets
              </li>
              <li>
                Client may not assign these Terms without written consent
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="terms-section" id="terms-contact">
            <h2 className="terms-h2">Contact Information</h2>
            <p>
              For questions about these Terms or our services, please contact us
              at:
            </p>
            <div className="mt-4 rounded border-l-[3px] border-[#a604d6] bg-[rgba(16,22,29,0.04)] px-7 py-6 max-[760px]:px-5 max-[760px]:py-[18px] [&>p]:!mb-2 [&>p:last-child]:!mb-0">
              <p className="!mb-2 !text-lg !font-bold !text-[#10161d]">
                mDNA Digital
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@mdna.digital"
                  className="terms-link"
                >
                  legal@mdna.digital
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://mdna.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terms-link"
                >
                  https://mdna.digital
                </a>
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
