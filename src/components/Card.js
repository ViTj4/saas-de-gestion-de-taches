import { cn } from "@/lib/utils";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn("rounded-xl border border-foreground/10 p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
