import { Link } from 'react-router-dom'
import { getPrimaryNavigation } from '../../data/navigation'

export default function MobileMenu({ open, onClose }) {
  const primaryNavigation = getPrimaryNavigation()

  return <div className={`mobile-navigation ${open ? 'open' : ''}`} id="mobile-navigation">
    <Link to={primaryNavigation[0].path} onClick={onClose}>{primaryNavigation[0].label}</Link>
    <Link to="/services" onClick={onClose}>Services</Link>
    {primaryNavigation.slice(1, -1).map(({ label, path }) => <Link to={path} key={path} onClick={onClose}>{label}</Link>)}
    <Link to="/contact" onClick={onClose}>Contact <span aria-hidden="true">↗</span></Link>
  </div>
}
