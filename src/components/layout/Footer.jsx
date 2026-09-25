// 
import { Link } from "react-router-dom";

import {
  getPrimaryNavigation,
  getServiceLinks,
} from "../../data/navigation";

import mdnaLogo from "../../assets/logo/mdna-logo-clean.png";

export default function Footer() {
  const primaryNavigation = getPrimaryNavigation();
  const serviceLinks = getServiceLinks();

  return (
    <footer className="site-footer" id="footer-contact">
      <div className="footer-inner">

        {/* Logo */}
        <Link
          className="footer-logo"
          to="/"
          aria-label="mDNA home"
        >
          <img
            src={mdnaLogo}
            alt="mDNA.digital"
            className="footer-logo-image"
          />
        </Link>

        {/* Footer Navigation */}
        <div className="footer-columns">

          {/* Explore */}
          <div>
            <p className="footer-heading">Explore</p>

            {primaryNavigation.slice(0, 5).map(({ label, path }) => (
              <Link to={path} key={path}>
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="footer-heading">Services</p>

            {serviceLinks.slice(0, 5).map(({ label, path }) => (
              <Link to={path} key={path}>
                {label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <p className="footer-heading">Connect</p>

            <a href="mailto:hello@mdna.digital">
              hello@mdna.digital
            </a>

            {primaryNavigation.slice(3).map(({ label, path }) => (
              <Link to={path} key={path}>
                {label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 mDNA.digital</span>
        <span>Marketing that moves business forward.</span>
      </div>
    </footer>
  );
}