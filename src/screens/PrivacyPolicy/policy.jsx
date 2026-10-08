import { useEffect } from "react";
import { sections } from "./data/policyData";

function PolicyList({ items }) {
  return (
    <ul className="my-3 list-disc space-y-1 pl-6 text-[15px] leading-[1.65] text-[#20252b]">
      {items.map((item, index) => (
        <li key={index} className="pl-0.5">
          {item}
        </li>
      ))}
    </ul>
  );
}

function PolicySubsection({ subsection }) {
  return (
    <div className="mt-5 first:mt-0">
      <h3 className="mb-2 text-[17px] font-semibold leading-snug text-[#10161d]">
        {subsection.title}
      </h3>
      {subsection.intro && (
        <p className="mb-2 text-[15px] leading-[1.65] text-[#20252b]">
          {subsection.intro}
        </p>
      )}
      {subsection.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-2 text-[15px] leading-[1.65] text-[#20252b]"
        >
          {paragraph}
        </p>
      ))}
      {subsection.list && <PolicyList items={subsection.list} />}
      {subsection.secondaryIntro && (
        <p className="mb-2 mt-4 text-[15px] leading-[1.65] text-[#20252b]">
          {subsection.secondaryIntro}
        </p>
      )}
      {subsection.secondaryList && (
        <PolicyList items={subsection.secondaryList} />
      )}
      {subsection.afterList && (
        <p className="mt-2 text-[15px] leading-[1.65] text-[#20252b]">
          {subsection.afterList}
        </p>
      )}
    </div>

  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white px-5 py-10 text-[#111318] sm:px-8 sm:py-14 lg:px-10">
          <div className="absolute top-[-100px] right-[18%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
      <div className="mx-auto w-full max-w-[1036px]">
        <header className="mb-9 max-w-[880px]">
          <h1 className="mb-3 text-[clamp(30px,4vw,38px)] font-extrabold leading-tight tracking-[-0.03em] text-[#10161d]">
            Privacy Policy
          </h1>
          <p className="text-[14px] font-semibold text-[#10161d]">
            Last Updated: January 2025
          </p>
        </header>

        <article className="w-full max-w-[880px] space-y-7">
          {sections.map((section) => {
            const sectionContent = (
              <section key={section.title}>
                <h2 className="mb-3 text-[21px] font-bold leading-tight tracking-[-0.02em] text-[#10161d]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-3 text-[15px] leading-[1.65] text-[#20252b] last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.intro && (
                  <p className="mb-2 text-[15px] leading-[1.65] text-[#20252b]">
                    {section.intro}
                  </p>
                )}
                {section.list && <PolicyList items={section.list} />}
                {section.afterList && (
                  <p className="mt-2 text-[15px] leading-[1.65] text-[#20252b]">
                    {section.afterList}
                  </p>
                )}
                {section.subsections?.map((subsection) => (
                  <PolicySubsection
                    key={subsection.title}
                    subsection={subsection}
                  />
                ))}
                {section.contact && (
                  <div className="mt-3 space-y-2 text-[15px] leading-[1.65] text-[#20252b]">
                    <div className="absolute end-[5px] left-[-4%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
                    <p className="font-bold text-[#10161d]">mDNA Digital</p>
                    <p>
                      Website:{" "}
                      <a
                        href="https://mdna.digital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a604d6] underline decoration-transparent underline-offset-4 transition-colors hover:text-[#bd00f2] hover:decoration-[#bd00f2]"
                      >
                        https://mdna.digital
                      </a>
                    </p>
                  </div>
                )}
              </section>
            );

            if (
              section.title === "How We Collect Information" ||
              section.title === "Your Data Rights and Choices"
            ) {
              return (
                <div
                  key={section.title}
                  className="relative isolate px-4 py-10 before:absolute before:inset-y-0 before:-left-[100vw] before:-right-[100vw] before:-z-10 before:content-[''] before:bg-[linear-gradient(135deg,rgba(189,0,242,0.14),rgba(189,0,242,0.07),rgba(189,0,242,0.02))] sm:px-10"
                >
                  <div className="mx-auto w-full max-w-[900px]">
                    {sectionContent}
                  </div>
                </div>
              );
            }

            return sectionContent;
          })}
        </article>

      </div>
    </main>
  );
}