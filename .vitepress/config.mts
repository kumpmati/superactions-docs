import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SvelteKit Superactions",
  description: "Call your server code like normal functions",

  head: [["link", { rel: "icon", href: "/logo.webp" }]],

  themeConfig: {
    logo: {
      src: "/logo.webp",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide" },
      {
        text: "API Reference",
        link: "/reference/endpoint",
        activeMatch: "/reference",
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is Superactions?",
            link: "/guide/what-is-superactions",
          },
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Terminology", link: "/guide/terminology" },
          { text: "Restrictions", link: "/guide/restrictions" },
        ],
      },
      {
        text: "Validation",
        items: [
          { text: "With Zod", link: "/validation/zod" },
          { text: "With Joi", link: "/validation/joi" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Auto-importing actions", link: "/examples/autoimport" },
          { text: "Using context", link: "/examples/context" },
          { text: "Nesting / grouping", link: "/examples/nesting" },
          { text: "Destructuring the client", link: "/examples/destructuring" },
          { text: "Multiple endpoints", link: "/examples/multiple-endpoints" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "endpoint", link: "/reference/endpoint" },
          { text: "superActions", link: "/reference/superActions" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kumpmati/sveltekit-superactions",
      },
      {
        icon: "npm",
        link: "https://npmjs.com/package/sveltekit-superactions",
      },
    ],
  },
});
