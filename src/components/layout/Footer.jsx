import { Link } from "react-router-dom";
import {
  getPrimaryNavigation,
  getServiceLinks,
} from "../../constant/navigation";
import mdnaLogo from "../../assets/logo/mdna-logo-clean.png";

export default function Footer() {
  const primaryNavigation = getPrimaryNavigation();
  const serviceLinks = getServiceLinks();

  return (
    <footer className="block bg-[#101116] text-[#f8f8f7]" id="footer-contact">
      <div className="w-[calc(100%-32px)] md:w-[calc(100%-48px)] xl:w-[min(calc(100%-64px),1500px)] min-h-[330px] mx-auto py-11 px-0 md:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[55px] lg:gap-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[18px] lg:col-start-2 lg:gap-9">

          <div className="flex flex-col items-start gap-[13px]">
            <p className="my-[5px] text-violet font-mono text-[15px] tracking-[0.15em] uppercase">
              Explore
            </p>

            {primaryNavigation.slice(0, 3).map(({ label, path }) => (
              <Link
                to={path}
                key={path}
                className="text-[#f8f8f7] text-[12px] no-underline hover:text-[#bd00f2] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[13px]">
            <p className="my-[5px]  text-violet font-mono text-[15px] tracking-[0.15em] uppercase">
              Services
            </p>

            {serviceLinks.slice(0, 6).map(({ label, path }) => (
              <Link
                to={path}
                key={path}
                className="text-[#f8f8f7] text-[12px] no-underline hover:text-[#bd00f2] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[13px]">
            <p className="my-[5px]  text-violet font-mono text-[15px] tracking-[0.15em] uppercase">
              Connect
            </p>


            {primaryNavigation.slice(3).map(({ label, path }) => (
              <Link
                to={path}
                key={path}
                className="text-[#f8f8f7] text-[12px] no-underline hover:text-[#bd00f2] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[calc(100%-32px)] md:w-[calc(100%-48px)] xl:w-[min(calc(100%-64px),1500px)] mx-auto py-4 px-0 md:px-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/12 text-[#747c87] font-mono text-[8px] md:text-[10px]">
        <Link
          className="inline-flex items-center no-underline"
          to="/"
          aria-label="mDNA home"
        >
          <img
            src={mdnaLogo}
            alt="mDNA.digital"
            className="block h-auto w-[120px] md:w-[145px]"
          />
        </Link>
        <div className="flex items-center gap-[16px]">
          <Link
            to="/terms"
            className="text-[#f8f8f7] text-[12px] no-underline hover:text-[#bd00f2] transition-colors"
          >
            Terms & Condition
          </Link>
          <Link
            to="/privacy-policy"
            className="text-[#f8f8f7] text-[12px] no-underline hover:text-[#bd00f2] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}