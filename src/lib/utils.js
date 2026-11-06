/** Assemble les classes CSS non vides (sans fusion des utilitaires Tailwind). */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
