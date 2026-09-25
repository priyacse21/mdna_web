export default function Button({ href, children, className = '' }) {
  return <a className={`text-link ${className}`.trim()} href={href}>{children} <span aria-hidden="true">↗</span></a>
}
