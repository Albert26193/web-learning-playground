# Web-Learning-Playground

## Intro

- A demo environment that integrates multiple mainstream front-end frameworks, making it easy to learn multiple frameworks in one environment. 🍺️
- Based on [Astro](https://astro.build/), a new static site builder that combines the best parts of modern build tools and frameworks.
- Integrated with [TailwindCSS](https://tailwindcss.com/) FrameWork with TailwindCSS Framework to Reduce the difficulty of writing styles.
- Use [Prettier](https://prettier.io/) to lint code style.

## Preview

- OverView:

![overview](https://img-20221128.oss-cn-shanghai.aliyuncs.com/img-2023-05/202402261715369.png)

- React Preview:

![react](https://img-20221128.oss-cn-shanghai.aliyuncs.com/img-2023-05/202402261717728.png)

## Get Start

```sh
# 0. clone this repo
git clone https://github.com/Albert26193/web-learning-playground.git

# 1. install dependencies
pnpm install

# 2. start dev server
pnpm dev
```

## Project Structure

Inside of this project, you'll see the following folders and files: 🚀

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── .../
│   │   └── ....astro
│   └── pages/
│       └── index.astro
└── package.json
```

- The learning content is centrally located in the `/src/pages` directory, which is a crucial directory.
- Astro looks for `.astro` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
- Any static assets, like images, can be placed in the `public/` directory.

---

- `/src/pages` structure:

```text
# /src/pages
.
├── index.astro
├── React
│   ├── Demo
│   ├── ReactOfficalToe
│   └── ReactRouter.astro   # React Router
├── Vanilla
│   ├── Demo
│   └── VanillaRouter.astro # Vanilla Router
└── Vue
    ├── Demo
    ├── TestSlot
    └── VueRouter.astro     # Vue Router
```

## Usage

- For example, I want to create a React learning demo, which named `demo`.
- **step1:** add a new dir named `Demo` in `/src/pages/React/`.
- **step2:** add a new file named `[your file name].tsx` in `/src/pages/React/Demo/` (the `tsx` is the file extension of React), then write your React code in `[your file name].tsx`.
- **step3:** add a new Astro file Named `index.astro`, which offers a route. The content of `index.astro` is as follows:

```tsx
---
import { DemoReact } from '[your file name]';
import LayoutReact from '../../../layouts/LayoutReact.astro';
---

<LayoutReact title="react demo" framework="React">
  <DemoReact client:load />
</LayoutReact>
```

---

- after that, your file structure should be like this:

```text
# /src/pages/React
├── Demo
│   ├── index.astro
│   └── [your file name].tsx
├── ...
└── Router.astro
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
