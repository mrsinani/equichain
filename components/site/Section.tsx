import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

export function Section({
  id,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-24 sm:py-28 md:py-32", className)}
      {...rest}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-6 md:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
