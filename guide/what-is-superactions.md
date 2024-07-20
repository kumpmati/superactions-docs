# What is Superactions?

Superactions is a small library built around the [API routes](https://kit.svelte.dev/docs/routing#server) functionality in [SvelteKit](https://kit.svelte.dev).

It allows you to easily and type safely call your server-side code from the client, while mostly utilising the existing functionality and patterns of SvelteKit.

## Why?

SvelteKit's [load functions](https://kit.svelte.dev/docs/load) and [forms actions](https://kit.svelte.dev/docs/form-actions) cover most normal use cases around data loading and submitting. Still, there are sometimes cases where these tools become either clunky or impractical to use.

Here are some concrete examples:

1. Games\* or other interactive apps that don't use forms for interaction
2. Stores or reactive classes that call the server from normal `.js`/`.ts` files

<small>\*Fast-paced games probably shouldn't use HTTP for communication</small>

## Should I use this library?

While I do think you should try Superactions out (_totally unbiased opinion_ 😉), it's best if you're also aware of its strengths and weaknesses.

### 🚫 When you cannot use Superactions:

1. The app has to work without JavaScript (try [form actions](https://kit.svelte.dev/docs/form-actions))

### 🤷 When you might not need Superactions:

1. You can use [load functions](https://kit.svelte.dev/docs/load)
2. You can use URL parameters to specify what data to load
3. Data submissions can be done using form elements (try [Superforms](https://superforms.rocks)!)

### 👍 When using Superactions can benefit you:

1. The data you're sending is too complex to be represented as FormData (and maybe you don't like embedding JSON inside FormData)
2. Using form elements or URL parameters to submit the data isn't easy or practical
3. You want automatic type safety for your server calls
4. Your data is JSON only (with [some additions](/guide/restrictions.md#restrictions))

## Shout-outs

Thanks to:

- [React Server Actions](https://react.dev/reference/rsc/server-actions) for guiding the developer experience
- [Superforms](https://superforms.rocks) for influencing the name and initial implementation
