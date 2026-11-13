import { Manrope } from "next/font/google";
import { APP_NAME } from "@/lib/constants";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: "Organisez vos projets et vos tâches avec Abricot.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <a
          href="#main-content"
          className="fixed top-4 left-4 z-50 -translate-y-32 rounded-md bg-foreground px-4 py-3 text-white focus:translate-y-0"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
