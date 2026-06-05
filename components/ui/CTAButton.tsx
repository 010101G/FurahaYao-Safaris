import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 cursor-pointer will-change-transform hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-safari-terracotta text-white hover:shadow-lift hover:bg-safari-brown",
  secondary: "bg-safari-black text-white hover:bg-safari-charcoal hover:shadow-lift",
  ghost: "border border-safari-brown/30 text-safari-black hover:border-safari-brown hover:bg-safari-brown hover:text-white",
  light: "bg-white text-safari-black hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function Arrow() {
  return (
    <svg
      className="transition-transform duration-300 group-hover:translate-x-1"
      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
