import { Link } from "react-router-dom";

const variantClassNames = {
  purple:
    "border-transparent bg-[#a604d6] hover:shadow-[0_14px_35px_rgba(166,4,214,0.24)]",

  black:
    "border-white/30 bg-[#111318] hover:border-[#a604d6]",
};

export default function Button({
  href,
  to,
  children,
  className = "",
  variant = "purple",
  icon,
}) {
  const Component = to ? Link : "a";
  const destination = to ? { to } : { href };

  return (
    <Component
      className={`min-h-[46px] inline-flex items-center justify-center gap-2.5 px-[19px] border text-[12px] font-semibold tracking-[0.01em] text-white no-underline transition-all max-[600px]:w-full ${variantClassNames[variant]} ${className}`.trim()}
      {...destination}
    >
      {children}
      {icon && <span aria-hidden="true">{icon}</span>}
    </Component>
  );
}
