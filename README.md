### Vue-3 first look : Bitly clone 

## Features

- ⚡️ [Vue3](https://github.com/vuejs/vue-next), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📲 [Components auto importing](./src/components)

- 🎨 TailwindCSS with dark mode out-of-box

- 😃 [Use icons from any icon sets, with no compromise](./src/components)

- 🌍 [i18n ready](./locales)

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero config

<br>

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/) - with built-in dark mode!

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [PurgeIcons](https://github.com/antfu/purge-icons) - bundles only the icons that you use

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [vite-plugin-voie](https://github.com/vamplate/vite-plugin-voie) - file system based routing
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components) - components auto import
- [vue-i18n](https://github.com/intlify/vue-i18n-next) - internationalization
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### Coding Style

- Use Composition API with [`<script setup>` SFC](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config-vue](https://github.com/antfu/eslint-config), single colons, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
  - [Vue TypeScript Plugin](https://github.com/znck/vue-developer-experience/tree/master/packages/typescript-plugin-vue) - better type support for Vue
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - deploy
- [VS Code Extensions](./.vscode/extensions.json)
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Clone to local

If you prefer do to it manually with cleaner git history

```bash
npx degit antfu/vitesse my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Front + Back

Just run and visit http://localhost:8080

```bash
docker-compose up
cd server
# Make sur pnpm is installed : npm install pnpm -g
pnpm run dev
```

### Build

To build the App, run

```bash
cd front
pnpm build
```

And you will see the genrated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select you clone, `OK` along the way, and your App will be live in a minute.
