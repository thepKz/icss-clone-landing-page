import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
  containerClassName = "max-w-[1400px] mx-auto px-4 md:px-8",
}: SectionShellProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={containerClassName}>{children}</div>
    </section>
  );
}
