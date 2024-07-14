# What is Superactions?

Superactions is a small library built around the [API routes](https://kit.svelte.dev/docs/routing#server) functionality in [SvelteKit.](https://kit.svelte.dev)

It allows you to easily and type safely call your server-side code from the client, while utilising the existing functionality of SvelteKit.

## Why?

While SvelteKit has great tools for [fetching data](https://kit.svelte.dev/docs/load) and [submitting data via forms](https://kit.svelte.dev/docs/form-actions), it doesn't really provide the same tools for sending data to the backend programmatically.

Here's an example:

Let's say that you need to execute some backend logic every time the user navigates to a new page.
You can't really use a form for that, and loader functions only send data from the server to the client.

Wouldn't it be nice if we could just call a function on the client, and have it execute the backend logic? Like so:

```svelte
<script lang="ts">
  import { afterNavigate } from '$app/navigation'
  import { someFunction } from '$lib/server';

  afterNavigate(() => {
    const result = await someFunction(myData)

    doThingsWith(result)
  })
</script>
```

That's the goal of this library!
The ability to just 'call a function' with some arguments, have the backend execute some code, and return the result to the client automatically.

## Should I use this library?

Superactions aims to fill a certain gap between the built-in functionalities provided by SvelteKit, and you should be aware of the existing capabilities and restrictions before choosing to use an external library like this one.

Here are some cases where using Superactions might apply:

### There's lots of interactivity that can't be represented as forms or pages

If you can use forms, consider [form actions](https://kit.svelte.dev/docs/form-actions) instead.

### The data I'm sending is too complex to be represented as FormData

If the data is too complex but the submissions happen using forms, consider using [Superforms](https://superforms.rocks/) in JSON mode instead.

### The data submission doesn't have to work without JavaScript

If it has to also work without JavaScript, consider [form actions](https://kit.svelte.dev/docs/form-actions) or [Superforms](https://superforms.rocks).

### The endpoints that I'm implementing don't have to be exposed as a REST API

If the endpoints have to conform to REST API rules, consider normal [API routes](https://kit.svelte.dev/docs/routing#server) instead.

### All the data I'm sending can be represented as JSON

The library doesn't yet support data types other than JSON (contributions are welcome!). If this doesn't work for you, consider using [API routes](https://kit.svelte.dev/docs/routing#server) without this library.

## Shout-outs

The behaviour is inspired by [React's Server Actions](https://react.dev/reference/rsc/server-actions), and the implementation (and name) takes inspiration from how [Superforms](https://superforms.rocks) shares state between the server and the client.
