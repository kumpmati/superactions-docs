import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SvelteKit Superactions",
  description: "Call your server code like normal functions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide" },
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
