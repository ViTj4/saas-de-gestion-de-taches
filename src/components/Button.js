"use client";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "rounded-lg bg-foreground px-5 py-3 text-base text-white hover:bg-[#373737]",
  link: "rounded-sm text-sm text-link underline underline-offset-2 hover:text-link-hover",
};

export default function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none",
        variants[variant] ?? variants.primary,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
