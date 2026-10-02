import { Link } from 'react-router-dom'
import { getPrimaryNavigation } from '../../data/navigation'

export default function MobileMenu({ open, onClose }) {
  const primaryNavigation = getPrimaryNavigation()

  if (!open) return null

  const linkClasses =
    "py-[13px] text-[#f8f8f7] text-[14px] no-underline border-b border-white/10 hover:text-[#bd00f2] transition-colors"

  return (
    <div
      className="fixed top-[68px] right-0 left-0 z-19 grid gap-0 px-4 md:px-6 py-5 pb-7 bg-[#101116] border-t border-white/12 lg:hidden shadow-xl"
      id="mobile-navigation"
    >
      <Link
        className={linkClasses}
        to={primaryNavigation[0].path}
        onClick={onClose}
      >
        {primaryNavigation[0].label}
      </Link>
      <Link
        className={linkClasses}
        to="/services"
        onClick={onClose}
      >
        Services
      </Link>
      {primaryNavigation.slice(1, -1).map(({ label, path }) => (
        <Link
          className={linkClasses}
          to={path}
          key={path}
          onClick={onClose}
        >
          {label}
        </Link>
      ))}
      <Link
        className={`${linkClasses} flex items-center justify-between`}
        to="/contact"
        onClick={onClose}
      >
        <span>Contact</span>
        <span className="text-[#bd00f2]" aria-hidden="true">↗</span>
      </Link>
    </div>
  )
}
