import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SvelteKit Superactions",
  description: "Call your server code like normal functions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide" },
      {
        text: "API Reference",
        link: "/reference/superAPI",
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
        text: "Reference",
        items: [
          { text: "superAPI", link: "/reference/superAPI" },
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
