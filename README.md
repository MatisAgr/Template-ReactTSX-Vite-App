<div align="center">

# Template React Vite App
  
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.15-06B6D4?logo=tailwindcss&logoColor=white)

Un template moderne pour démarrer rapidement vos projets React avec TypeScript, Vite et TailwindCSS.

</div>

![image](https://github.com/user-attachments/assets/92739894-c194-41cd-8aba-e13c856332d2)

## ✨ Fonctionnalités

- ⚡️ **Vite** - Build ultra-rapide et serveur de développement avec HMR
- 🔥 **React 19** - La dernière version avec les Hooks et les fonctionnalités modernes
- 📝 **TypeScript** - Typage statique pour un code plus robuste
- 🎨 **TailwindCSS** - Framework CSS utility-first pour un design rapide
- 🧭 **React Router** - Navigation fluide entre les pages
- 🔄 **Axios** - Client HTTP pour les requêtes API
- 💅 **Framer Motion** - Animations fluides et intuitives
- 🎭 **React Icons** - Large collection d'icônes populaires
- 🔐 **Dotenv** - Gestion sécurisée des variables d'environnement
- 🍪 **js-cookie** - Gestion simplifiée des cookies côté client

## 📦 Technologies incluses

| Bibliothèque | Version | Description |
|--------------|---------|-------------|
| React | 19.0.0 | Bibliothèque UI principale |
| React DOM | 19.0.0 | Rendu React pour le navigateur |
| React Router | 7.4.0 | Routage pour l'application |
| TailwindCSS | 4.0.15 | Framework CSS utilitaire |
| Framer Motion | 12.5.0 | Animations et transitions |
| Axios | 1.8.4 | Client HTTP pour les requêtes API |
| React Icons | 5.5.0 | Bibliothèque d'icônes |
| Dotenv | 16.4.7 | Gestion des variables d'environnement |
| js-cookie | 3.0.6 | Gestion des cookies côté client |
| TypeScript | 5.7.2 | Langage de programmation typé |
| Vite | 6.2.0 | Serveur de développement et bundler |
| ESLint | 9.21.0 | Linting et analyse statique du code |

## 🚀 Démarrage rapide

### Prérequis

- Node.js (v18 ou supérieur recommandé)
- npm, yarn ou pnpm

### Installation

1. Clonez ce template
```bash
git clone https://github.com/MatisAgr/Template-ReactTSX-Vite-App.git
```

2. Accédez au répertoire
```bash
cd Template-ReactTSX-Vite-App
```

3. Installer les dépendances
```bash
npm i
# ou
yarn
# ou
pnpm install
```

4. Lancez votre serveur de développement
```bash
npm run dev
```

## 📁 Structure du projet

```text
template-app/
├── public/                    # Fichiers statiques
├── src/
│   ├── assets/                # Images, fonts et autres ressources
│   ├── callApi/               # Services et fonctions pour les appels API
│   ├── components/            # Composants React réutilisables
│   │   └── Navbar/            # Composant de navigation (commenté dans App.tsx)
│   ├── constants/             # Constantes de l'application
│   │   └── AppName.tsx        # Nom de l'application
│   ├── hooks/                 # Hooks React personnalisés
│   ├── pages/                 # Pages de l'application
│   │   └── Home.tsx           # Page d'accueil
│   ├── utils/                 # Utilitaires
│   │   ├── ProtectedRoute.tsx # Route protégée par authentification
│   │   └── ScrollToTop.tsx    # Défilement vers le haut lors des changements de page
│   ├── App.tsx                # Composant racine avec configuration des routes
│   ├── index.css              # Styles globaux (importe Tailwind)
│   ├── main.tsx               # Point d'entrée de l'application
│   └── vite-env.d.ts          # Déclarations TypeScript pour Vite
├── .gitignore                 # Fichiers ignorés par Git
├── eslint.config.js           # Configuration ESLint
├── index.html                 # Template HTML principal
├── package.json               # Dépendances et scripts npm
├── tsconfig.app.json          # Configuration TypeScript pour l'application
├── tsconfig.json              # Configuration TypeScript principale
├── tsconfig.node.json         # Configuration TypeScript pour Node.js
└── vite.config.ts             # Configuration Vite
```

