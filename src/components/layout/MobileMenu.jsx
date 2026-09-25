import { Link } from 'react-router-dom'
import { getPrimaryNavigation, getServiceLinks } from '../../data/navigation'

export default function MobileMenu({ open, onClose }) {
  const primaryNavigation = getPrimaryNavigation()
  const serviceLinks = getServiceLinks()

  return <div className={`mobile-navigation ${open ? 'open' : ''}`} id="mobile-navigation">
    <Link to={primaryNavigation[0].path} onClick={onClose}>{primaryNavigation[0].label}</Link>
    <p>Services</p>
    {serviceLinks.map(({ number, label, path }) => <Link className="mobile-service" to={path} key={path} onClick={onClose}><small>{number}</small>{label}</Link>)}
    {primaryNavigation.slice(1, -1).map(({ label, path }) => <Link to={path} key={path} onClick={onClose}>{label}</Link>)}
    <Link to="/contact" onClick={onClose}>Contact <span aria-hidden="true">↗</span></Link>
  </div>
}
