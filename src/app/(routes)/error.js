"use client";

import Button from "@/components/Button";

export default function Error({ retry }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-2xl font-semibold">Une erreur est survenue</h1>
      <p>Veuillez réessayer de charger cette page.</p>
      <Button onClick={() => retry()}>Réessayer</Button>
    </main>
  );
}
