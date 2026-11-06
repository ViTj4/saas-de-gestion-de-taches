import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">404 — Page introuvable</h1>
      <p>La page demandée est introuvable.</p>
      <Link href="/" className="underline">
        Retour à l’accueil
      </Link>
    </main>
  );
}
