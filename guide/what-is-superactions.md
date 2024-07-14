# What is Superactions?

Superactions is a small library built around the [server endpoints](https://kit.svelte.dev/docs/routing#server) functionality in [SvelteKit.](https://kit.svelte.dev)

It allows you to easily and type safely call your server-side code from the client, all while not trying to feel 'too magical'.

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

## Shout-outs

The behaviour is inspired by [React's Server Actions](https://react.dev/reference/rsc/server-actions), and the implementation takes inspiration from how [SvelteKit Superforms](https://superforms.rocks) shares state between the server and the client.
