import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { getPrimaryNavigation } from "../../constant/navigation";
import mdnaLogo from "../../assets/logo/mdna-logo-clean.png";

export default function Header() {
  const primaryNavigation = getPrimaryNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
  };

  const navLinkClasses =
    "relative inline-flex items-center min-h-[68px] p-0 text-inherit no-underline cursor-pointer after:content-[''] after:absolute after:right-full after:bottom-[19px] after:left-0 after:h-[1px] after:bg-[#bd00f2] hover:after:right-0 after:transition-[right] after:duration-200 after:ease-out";

  return (
    <>
      <header className="sticky top-0 z-20 min-h-[68px] bg-[#101116] text-[#f8f8f7] border-b border-white/12">
        <div className="w-[calc(100%-32px)] md:w-[calc(100%-48px)] xl:w-[min(calc(100%-64px),1500px)] min-h-[68px] mx-auto flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            className="inline-flex items-center gap-[7px] text-[21px] md:text-[24px] tracking-[-0.08em] no-underline text-inherit"
            to="/"
            onClick={closeMenus}
            aria-label="mDNA home"
          >
            <img
              src={mdnaLogo}
              alt="mDNA.digital"
              className="w-[120px] md:w-[145px] h-auto block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px]" aria-label="Main navigation">
            {primaryNavigation.slice(0, 1).map(({ label, path }) => (
              <Link to={path} key={path} className={navLinkClasses}>
                {label}
              </Link>
            ))}

            <Link to="/services" onClick={closeMenus} className={navLinkClasses}>
              Services
            </Link>

            {primaryNavigation.slice(1, -1).map(({ label, path }) => (
              <Link to={path} key={path} className={navLinkClasses}>
                {label}
              </Link>
            ))}

            <Link className={`ml-[3px] ${navLinkClasses}`} to="/contact">
              Contact <span className="ml-[7px] text-[#bd00f2] text-[16px]" aria-hidden="true">↗</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="grid lg:hidden gap-[5px] w-8 h-8 place-content-center p-0 border border-white/25 bg-transparent cursor-pointer"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            <span className="block w-[15px] h-[1px] bg-[#f8f8f7]"></span>
            <span className="block w-[15px] h-[1px] bg-[#f8f8f7]"></span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenus} />
    </>
  );
}