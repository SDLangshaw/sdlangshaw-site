import type { ReactNode } from "react";

type OutboundProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Outbound({ href, children, className }: OutboundProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
