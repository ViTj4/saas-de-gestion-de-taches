# Abricot — Gestion de tâches

Application Next.js 16 / React en JavaScript, avec App Router et Tailwind CSS 4.

## Démarrage

```bash
npm ci
npm run dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

## Pages d'authentification

| URL            | Comportement                                                    |
| -------------- | --------------------------------------------------------------- |
| `/`            | Redirige vers `/connexion`, le point d'entrée de l'application. |
| `/connexion`   | Formulaire de connexion et lien vers l'inscription.             |
| `/inscription` | Formulaire d'inscription et lien vers la connexion.             |

Les deux pages partagent le même layout et les mêmes composants de formulaire.
Les photos de `public/images` et le logo de `public/logos` sont ceux des maquettes.
Les titres utilisent **Manrope, 700, 40 px, interligne 100 %, sans espacement ajouté**.
La police est chargée avec `next/font` et servie par l'application.

À cette étape, seule l'interface est réalisée : les champs obligatoires et le
format de l'email sont validés dans le navigateur, avec des messages en français.
La soumission affiche un état explicite d'indisponibilité ; elle ne crée aucun
compte, aucune session et n'envoie ni ne conserve les identifiants.
Le bouton de mot de passe oublié indique également son indisponibilité.
Les règles de mot de passe, la validation serveur et les appels réseau seront
ajoutés lors du branchement de l'API d'authentification.

## Structure

```text
public/
├── fonts/
├── images/                   # connexion.jpg et register.jpg
└── logos/                    # abricotLogo.svg
src/
├── app/
│   ├── layout.js             # Langue française, police et lien d'évitement
│   ├── not-found.js
│   ├── (routes)/
│   │   ├── page.js           # Redirection de l'entrée de l'application
│   │   ├── connexion/page.js
│   │   ├── inscription/page.js
│   │   ├── layout.js
│   │   ├── loading.js
│   │   ├── error.js
│   │   └── not-found.js
│   └── api/hello/route.js
├── components/
│   ├── auth/
│   │   ├── AuthLayout.js     # Structure commune aux pages d'authentification
│   │   └── AuthForm.js       # Validation et états des deux formulaires
│   ├── BrandLogo.js
│   ├── Button.js             # Variantes principale et lien
│   ├── FormField.js          # Label, champ, aide et message d'erreur
│   ├── TextLink.js
│   ├── Card.js
│   ├── Navbar.js
│   └── Footer.js
├── lib/                      # Constantes, routes, utilitaires, futur client DB
├── styles/globals.css        # Tailwind et variables du thème
└── types/index.js            # Types documentés avec JSDoc
```

L'alias `@/*` pointe vers `src/*`. Les variables locales restent à la racine dans
`.env.local`, ignoré par Git. Aucun client de base de données n'est encore configuré.

## Principes à respecter pour tout le projet

- Interface responsive sur ordinateurs, tablettes et mobiles, sans hauteur fixe
  qui empêcherait le défilement lorsque le contenu ou le zoom augmente.
- Objectif d'accessibilité **WCAG 2.1 niveau AA au minimum** : HTML sémantique,
  navigation clavier, focus visible, labels explicites, erreurs associées aux
  champs et annoncées, contrastes suffisants et contenu utilisable à 200 % de zoom.
- Code JavaScript lisible, fonctions nommées explicitement, composants réutilisables
  et commentaires limités aux décisions qui nécessitent une explication.
- Tailwind pour les styles, avec les couleurs et la typographie centralisées.

Sur les écrans d'authentification, la photo décorative occupe la partie droite à
partir de 768 px. Sur mobile, elle est masquée pour laisser toute la place au
formulaire. Les petits liens orange sont plus foncés que les titres pour garantir
leur contraste ; les bordures des champs restent visibles.
Ces choix ne remplacent pas un audit complet de conformité WCAG.

## Qualité et formatage

| Commande               | Usage                                                                 |
| ---------------------- | --------------------------------------------------------------------- |
| `npm run lint`         | Vérifier les règles Next.js, React et React Hooks sans avertissement. |
| `npm run lint:fix`     | Appliquer les corrections ESLint disponibles.                         |
| `npm run format`       | Formater les fichiers avec Prettier.                                  |
| `npm run format:check` | Vérifier le formatage sans modifier les fichiers.                     |
| `npm run check`        | Exécuter les contrôles ESLint et Prettier.                            |
| `npm run build`        | Compiler pour la production.                                          |
| `npm start`            | Démarrer le serveur de production après un build.                     |

La configuration ESLint est alignée sur Next.js 16.4.5. `eslint-config-prettier`
prévient les conflits de formatage. Prettier impose 2 espaces, des guillemets
doubles, des points-virgules et des fins de ligne LF ; `.editorconfig` partage ces
conventions avec les éditeurs. Les sorties générées, `package-lock.json` et les
fichiers d'environnement sont exclus du formatage.

Dans VS Code, installer les extensions recommandées **ESLint** et **Prettier**.
Les réglages du projet activent le formatage et les corrections ESLint lors d'un
enregistrement explicite.
