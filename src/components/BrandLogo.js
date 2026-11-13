import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function BrandLogo({ className }) {
  return (
    <Image
      src="/logos/abricotLogo.svg"
      alt={APP_NAME}
      width={253}
      height={33}
      className={cn("h-auto w-full max-w-[15.8125rem]", className)}
    />
  );
}
