---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SvelteKit Superactions"
  tagline: Call your server code from the client like normal functions.
  image:
    src: /hero.webp
    alt: SvelteKit Superactions
  actions:
    - theme: brand
      text: What is Superactions?
      link: /guide/what-is-superactions
    - theme: alt
      text: Quickstart
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/kumpmati/sveltekit-superactions

features:
  - title: Full type safety
    icon: TS
    details: Types are shared between the client and the server, with 'Go to definition'-level support.
  - title: Easy to use
    icon: 👶
    details: Calls to the server seem like calling a normal async function.
  - title: A magical fit
    icon: 🪄
    details: Feels like something SvelteKit would (and should) have as a built-in feature.
  - title: Stay validated
    icon: 🔒
    details: Built-in body schema validation using Zod or Joi (with more libraries coming!)
---
