import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TextLink({ children, className, ...props }) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center rounded-sm text-link underline underline-offset-2 hover:text-link-hover",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
