This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Structure du projet (JavaScript)

```text
public/
├── favicon.ico
├── images/
├── fonts/
└── *.svg
src/
├── app/
│   ├── layout.js              # Layout racine et styles globaux
│   ├── not-found.js           # 404 pour les URL inconnues
│   ├── (routes)/              # Groupe sans effet sur les URL
│   │   ├── page.js            # Page d'accueil : /
│   │   ├── layout.js          # Layout partagé de ce groupe
│   │   ├── loading.js
│   │   ├── error.js
│   │   └── not-found.js
│   └── api/
│       └── hello/
│           └── route.js       # GET /api/hello
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Button.js
│   └── Card.js
├── lib/
│   ├── db.js                  # Emplacement pour le futur client de base de données
│   ├── utils.js
│   └── constants.js
├── styles/
│   └── globals.css
└── types/
    └── index.js              # Types documentés avec JSDoc
.env.local                   # Variables locales, ignorées par Git
jsconfig.json                # Alias @/* vers src/*
next.config.mjs
eslint.config.mjs
package.json
```

Les composants réutilisables sont prêts à être importés ; la page d'accueil
existante est conservée. `db.js` et `constants.js` sont des emplacements à
compléter, sans connexion à une base de données pour le moment.

Exemple d'import : `import Button from "@/components/Button";`.
Le groupe `(routes)` ne modifie pas les URL : sa page d'accueil reste `/`.
Le layout racine importe `@/styles/globals.css` et référence `/favicon.ico`.
Le fichier `src/app/not-found.js` réutilise la page 404 du groupe pour les URL inconnues.

Les fichiers `.tsx` / `.ts` de l'image sont remplacés par des `.js`.
Le projet conserve sa configuration Next.js 16 et Tailwind CSS 4 existante :
aucun `tsconfig.json`, `tailwind.config.ts` ou fichier PostCSS supplémentaire
n'est nécessaire avec l'intégration Tailwind/Turbopack déjà configurée.
Les fichiers `.gitkeep` conservent les dossiers d'images et de polices vides dans Git.

## Environnement de développement

Installer les dépendances avec `npm ci`, puis démarrer le projet avec `npm run dev`.

| Commande               | Usage                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `npm run lint`         | Vérifier le code avec les règles Next.js, React et React Hooks (aucun avertissement accepté). |
| `npm run lint:fix`     | Appliquer les corrections automatiques disponibles dans ESLint.                               |
| `npm run format`       | Formater les fichiers avec Prettier.                                                          |
| `npm run format:check` | Vérifier le formatage sans modifier les fichiers.                                             |
| `npm run check`        | Exécuter les vérifications ESLint et Prettier.                                                |
| `npm run build`        | Vérifier la compilation de production.                                                        |

ESLint utilise la configuration plate `eslint.config.mjs`, avec
`eslint-config-next` aligné sur Next.js 16.4.5. `eslint-config-prettier`
désactive les règles de formatage qui pourraient entrer en conflit avec Prettier.
Le lint s'exécute séparément du build Next.js ; lancer `npm run check` avant un commit.

Prettier est configuré dans `.prettierrc.json` : indentation de 2 espaces,
guillemets doubles, points-virgules et fins de ligne LF. `.editorconfig`
reprend ces conventions pour les éditeurs compatibles. Les fichiers générés,
le lockfile, `AGENTS.md` et les variables d'environnement sont exclus du formatage.

Dans VS Code, installer les extensions recommandées **ESLint**
(`dbaeumer.vscode-eslint`) et **Prettier** (`esbenp.prettier-vscode`).
Les réglages du projet activent le formatage Prettier à l'enregistrement et
les corrections ESLint lors d'un enregistrement explicite.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/(routes)/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
