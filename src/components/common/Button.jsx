export default function Button({ href, children, className = '' }) {
  return (
    <a
      className={`inline-flex items-center gap-2 text-inherit no-underline hover:text-violet transition-colors ${className}`.trim()}
      href={href}
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
