---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SvelteKit Superactions"
  # text: "Superpowers for your server actions"
  tagline: Call your server code like normal functions
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
    details: Types are shared between the client and the server, with 'Go to definition' support.
  - title: Easy to use
    icon: 👶
    details: Calls to the server feel like calling a normal async function.
  - title: The 'right' amount of magic
    icon: 🪄
    details: The library is a small wrapper around existing SvelteKit functionality.
  - title: Built-in validation
    icon: 🔒
    details: Stay safe! Body schema validation using Zod or Joi (more coming!)
---
