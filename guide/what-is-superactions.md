# What is Superactions?

Superactions is a small library built around the [API routes](https://kit.svelte.dev/docs/routing#server) functionality in [SvelteKit.](https://kit.svelte.dev)

It allows you to easily and type safely call your server-side code from the client, while mostly utilising the existing functionality of SvelteKit.

## Why?

SvelteKit's [load functions](https://kit.svelte.dev/docs/load) and [forms actions](https://kit.svelte.dev/docs/form-actions) cover most normal use cases around data loading and submitting. Still, there are sometimes cases where these tools become either clunky or impractical to use.

Here are some concrete examples:

1. Games\* or other interactive apps that don't use forms for interaction
2. Stores or reactive classes that call the server from outside the component tree

<small>\*Fast-paced games probably shouldn't use HTTP for communication</small>

## Should I use this library?

While I do think you should try Superactions out (_totally unbiased opinion_ 😉), it's best if you're also aware of the nice built-in tooling in SvelteKit [\[1\]](https://kit.svelte.dev/docs/load) [\[2\]](https://kit.svelte.dev/docs/form-actions) and community tools like [Superforms](https://superforms.rocks).

Here's a general, non-exhaustive checklist of cases and criteria for using Superactions:

- The app doesn't have to work without JavaScript
- The data you're sending is too complex for FormData (and you're tired of embedding JSON inside FormData)
- Using form elements or URL parameters to submit the data isn't easy or practical
- You don't care if the server is RESTful or not
- You want the convenience of automatic type safety for your server calls
- Your data is only JSON (with [some additions](/guide/restrictions.md#restrictions))

## Shout-outs

Thanks to:

- [React Server Actions](https://react.dev/reference/rsc/server-actions) for guiding the developer experience
- [Superforms](https://superforms.rocks) for influencing the name and parts of the implementation
