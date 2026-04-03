import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
  containerClassName = "max-w-[1400px] mx-auto px-4 md:px-8",
  "aria-labelledby": ariaLabelledBy,
}: SectionShellProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} aria-labelledby={ariaLabelledBy}>
      <div className={containerClassName}>{children}</div>
    </section>
  );
}
