import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

export default function AuthLayout({ title, imageSrc, children, footer }) {
  return (
    <div className="grid min-h-dvh grid-cols-1 md:grid-cols-[minmax(22rem,39.1%)_minmax(0,1fr)]">
      <div className="flex min-h-dvh min-w-0 flex-col px-6 py-10 sm:px-10 md:px-8 md:pt-[clamp(2.5rem,10vh,7rem)] md:pb-[clamp(2rem,7.5vh,6rem)]">
        <header className="flex shrink-0 justify-center">
          <BrandLogo />
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          aria-labelledby="auth-title"
          className="flex flex-1 items-center justify-center py-14 md:pt-24 md:pb-16"
        >
          <div className="w-full min-w-0 max-w-[17.5rem]">
            <h1
              id="auth-title"
              className="mb-8 text-center text-[2.5rem] leading-none font-bold tracking-normal text-brand [overflow-wrap:anywhere]"
            >
              {title}
            </h1>
            {children}
          </div>
        </main>

        <footer className="shrink-0">
          <p className="flex flex-wrap items-center justify-center gap-x-2 text-center text-sm leading-5">
            {footer}
          </p>
        </footer>
      </div>

      <div aria-hidden="true" className="relative hidden min-w-0 md:block">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(min-width: 900px) 61vw, (min-width: 768px) 54vw, 1px"
          fetchPriority="high"
          className="object-cover object-[94%_center]"
        />
      </div>
    </div>
  );
}
