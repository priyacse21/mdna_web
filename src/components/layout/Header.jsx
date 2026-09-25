// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import MobileMenu from './MobileMenu'
// import { getPrimaryNavigation, getServiceLinks } from '../../data/navigation'

// export default function Header() {
//   const primaryNavigation = getPrimaryNavigation()
//   const serviceLinks = getServiceLinks()
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)
//   const closeMenus = () => { setMenuOpen(false); setServicesOpen(false) }

//   return <>
//     <header className="site-header"><div className="site-header-inner">
//       <Link className="site-logo" to="/" onClick={closeMenus} aria-label="mDNA home"><span className="site-logo-mark">m</span><span className="site-logo-word">mDNA</span><span className="site-logo-dot" /></Link>
//       <nav className="site-nav" aria-label="Main navigation">
//         {primaryNavigation.slice(0, 1).map(({ label, path }) => <Link to={path} key={path}>{label}</Link>)}
//         <div className={`services-nav ${servicesOpen ? 'open' : ''}`}>
//           <button type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Services</button>
//           <div className="services-menu">{serviceLinks.map(({ number, label, path }) => <Link to={path} key={path} onClick={closeMenus}><small>{number}</small>{label}</Link>)}</div>
//         </div>
//         {primaryNavigation.slice(1, -1).map(({ label, path }) => <Link to={path} key={path}>{label}</Link>)}
//         <Link className="nav-contact" to="/contact">Contact <span aria-hidden="true">↗</span></Link>
//       </nav>
//       <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation"><span></span><span></span></button>
//     </div></header>
//     <MobileMenu open={menuOpen} onClose={closeMenus} />
//   </>
// }
import { useState } from "react";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import { getPrimaryNavigation, getServiceLinks } from "../../data/navigation";
import mdnaLogo from "../../assets/logo/mdna-logo-clean.png";

export default function Header() {
  const primaryNavigation = getPrimaryNavigation();
  const serviceLinks = getServiceLinks();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">

          {/* Logo */}
          <Link
            className="site-logo"
            to="/"
            onClick={closeMenus}
            aria-label="mDNA home"
          >
            <img
              src={mdnaLogo}
              alt="mDNA.digital"
              className="site-logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="site-nav" aria-label="Main navigation">
            {primaryNavigation.slice(0, 1).map(({ label, path }) => (
              <Link to={path} key={path}>
                {label}
              </Link>
            ))}

            <div
              className={`services-nav ${servicesOpen ? "open" : ""}`}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
              </button>

              <div className="services-menu">
                {serviceLinks.map(({ number, label, path }) => (
                  <Link
                    to={path}
                    key={path}
                    onClick={closeMenus}
                  >
                    <small>{number}</small>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {primaryNavigation.slice(1, -1).map(({ label, path }) => (
              <Link to={path} key={path}>
                {label}
              </Link>
            ))}

            <Link className="nav-contact" to="/contact">
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenus}
      />
    </>
  );
}