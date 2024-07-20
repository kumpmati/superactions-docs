# Getting Started

::: warning
🚧 This library is still in an early state. There will be bugs and breaking changes before a v1.0 release, so be careful!
:::

To use Superactions, you need a SvelteKit project. You can either set up one from scratch, or use an existing one.
This guide is the same for both.

Install the library using your package manager (npm, pnpm, yarn, bun):

```bash
npm install -D sveltekit-superactions
```

## Anatomy

There are only two necessary parts to using Superactions:

1. Server - Defines the endpoint(s)
2. Client - Uses the endpoint(s)

## Server setup

We'll begin by making an [endpoint](/guide/terminology.md#api--endpoint) on the server. This endpoint will hold the [actions](/guide/terminology.md#actions) (fancy name for functions) that we want to be able to call from client-side code like normal functions.

First, create a `+server.ts` file somewhere inside your routes folder. We'll choose `src/routes/api` this time.

To define an endpoint, use the `endpoint` function. It takes in an object containing all the actions you want to expose, and returns a normal SvelteKit request handler that we'll then mount inside a `+server.ts` file.

```ts
// src/routes/api/+server.ts
import { endpoint } from "sveltekit-superactions";

// endpoint returns a sveltekit request handler function.
export const POST = endpoint({
  // e is the RequestEvent provided by SvelteKit.
  // The second argument is what the client passed as arguments.
  greet: async (e, name: string) => {
    // whatever we return gets returned to the client
    return { greeting: `Hello, ${name}!` };
  },

  // If you want to add more actions, simply define them each one here as an async function:
  // secondAction: async (e, body) => { ... }
  // someThirdAction: async (e, body) => { ... }
});
```

In the example above, we define one action called `greet`, that takes a `name` as input and returns an object containing a greeting message.

## Client setup

In order to setup the client, simply call the `superActions` function and give it the exported API type and path:

```svelte
<!-- +page.svelte or +layout.svelte -->
<script lang="ts">
  import { superActions } from 'sveltekit-superactions'; // [!code highlight]
  import { setContext } from 'svelte';
  import type { API } from './api/+server.ts';

  // Initialize the client
  const api = superActions<API>('/api'); // [!code highlight]

  const handleClick = async () => {
    // You can now call api.greet like a normal async function.
    const result = await api.greet('World'); // [!code highlight]

    console.log(result); // { greeting: "Hello, World!" }
  }

  // (Optional) We could also make our API accessible
  // from anywhere in the app using svelte's contexts.
  setContext('api', api);
</script>


<button on:click={handleClick}>Click me</button>
```

## Schema validation

Since the client can pass in arbitrary values to the backend, we should probably validate the incoming values. Superactions provides small helper functions for [Zod](https://zod.dev) and [Joi](https://joi.dev/) that you can use to validate the incoming value before calling the action.

Let's use the Zod validator. Make sure to install Zod as a dependency if you haven't already!

Go back to the `+server.ts` file, and import the zod helper from `sveltekit-superactions`. The helper takes in two parameters: (1) the validation schema, and (2) the action to call with the validated arguments.

```ts
// src/routes/api/+server.ts
import { endpoint } from "sveltekit-superactions"; // [!code --]
import { endpoint, zod } from "sveltekit-superactions"; // [!code ++]
import { z } from "zod"; // [!code ++]

const greetSchema = z.string(); // [!code ++]

export const POST = endpoint({
  greet: async (e, name: string) => { // [!code --]
  greet: zod(greetSchema, async (e, name) => { // [!code ++]
    // [!code ++]
    // name is now automatically inferred as string
    return { greeting: `Hello, ${name}!` };
  }, // [!code --]
  }), // [!code ++]
});
```

Now, if the client tries calling `greet` with anything other than a string, the call will fail.

## Done!

You're now an expert at the basics of Superactions!

A good next step is to familiarise yourself with [the restrictions](/guide/restrictions) that come with using Superactions.
