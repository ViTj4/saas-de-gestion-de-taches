"use client";

import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-lg bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
