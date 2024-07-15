# Getting Started

::: warning
🚧 This library is still in an early state. There will be bugs, and breaking changes will likely happen before a v1.0 release, so be careful!
:::

To use Superactions, you need a SvelteKit project. You can either set up one from scratch, or use an existing one.
This guide is the same for both.

Install the library using your package manager (npm, pnpm, yarn, bun):

```bash
npm install -D sveltekit-superactions
```

## Anatomy

There are three necessary parts to using Superactions:

1. Server - Defines the endpoint(s)
2. Load function(s) - Provides the endpoint schemas to the client
3. Client - Uses the endpoint(s)

## Server setup

We'll begin by making an [endpoint](/guide/terminology.md#api--endpoint) on the server. This endpoint will hold the [actions](/guide/terminology.md#actions) (fancy name for functions) that we want to be able to call from client-side code like normal functions.

First, create a `+server.ts` file somewhere inside your routes folder. We'll choose `src/routes/api` this time.

To define an endpoint, use the `superAPI` function. It takes in a path and some actions, and returns a normal SvelteKit request handler that we'll then mount inside a `+server.ts` file.

In the `+server.ts` file, give the `superAPI` a path and some action(s), and export its return value as a POST handler like so:

```ts
// src/routes/api/+server.ts
import { superAPI } from "sveltekit-superactions";

// superAPI returns a sveltekit request handler function.
export const POST = superAPI({
  path: "/api",
  actions: {
    // The first argument is the RequestEvent provided by SvelteKit.
    // The second argument is what the client passed as arguments.
    greet: async (event: RequestEvent, name: string) => {
      return { greeting: `Hello, ${name}!` };
    },
  },
});
```

The `superAPI` function takes in a config object with the following fields:

### `path`

This is the relative path where your API route is mounted. Since we chose to export it at `src/routes/api/+server.ts`, the path should be set as `/api`.

### `actions`

This is where you define the functions that the client can call using this endpoint. In the example above, we define one action called `greet`, that takes a `name` as input and returns an object containing the greeting message.

## Load function

The load function is what tells the client what endpoints and actions are available.

In order to access the endpoint on the client, we need to load the endpoint using `+page.server.ts` or `+layout.server.ts`. Simply import the handler that you created previously using the `superAPI` function, and return its actions like so:

```ts
// src/routes/+page.layout.ts

// Since we exported the endpoint as a POST handler,
// we'll import it here and rename it for readability.
import { POST as greetingAPI } from "./api/+server.js"; // [!code highlight]

export const load = async () => {
  return {
    // ...other props

    // The imported endpoint has a property called 'actions',
    // which we need to return in the load function.
    greetingAPI: greetingAPI.actions, // [!code highlight]
  };
};
```

## Client setup

In order to setup the client, simply pass the loaded actions to the `superActions` function:

```svelte
<script lang="ts">
  import { superActions } from 'sveltekit-superactions';
  import { setContext } from 'svelte';

  // Access the data provided by the load function
  export let data; // [!code highlight]

  // Initialize the client using the API schema
  const api = superActions(data.greetingAPI); // [!code highlight]

  const handleClick = async () => {
    // You can now call api.greet like a normal async function.
    const result = await api.greet('World'); // [!code highlight]

    console.log(result); // { greeting: "Hello, World!" }
  }

  // (Optional) We could also make the API accessible
  // from anywhere in the app using svelte's contexts.
  setContext('api', api);
</script>


<button on:click={handleClick}>Click me</button>
```

## Schema validation

Since the client can pass in arbitrary values to the backend, we should probably validate the incoming values. Superactions provides small helper functions for [Zod](https://zod.dev) and [Joi](https://joi.dev/) that you can use to validate the incoming value before calling the action.

Let's use the Zod validator. Make sure to install Zod as a dependency if you haven't already!

Go back to the `+server.ts` file, and import the zod helper from `sveltekit-superactions`. The helper takes in two parameters: (1) the schema, and (2) the handler to call with the validated arguments.

In this case the input is a string, to we'll

```ts
// src/routes/api/+server.ts
import { superAPI } from "sveltekit-superactions"; // [!code --]
import { superAPI, zod } from "sveltekit-superactions"; // [!code ++]
import { z } from "zod"; // [!code ++]

const greetSchema = z.string() // [!code ++]

// superAPI returns a sveltekit request handler function.
export const POST = superAPI({
  path: "/api",
  actions: {
    // The first argument is the RequestEvent provided by SvelteKit.
    // The second argument is what the client passed as arguments.
    greet: async (event: RequestEvent, name: string) => { // [!code --]
    greet: zod(greetBody, async (event: RequestEvent, name: string) => { // [!code ++]
      return { greeting: `Hello, ${name}!` };
    }, // [!code --]
    }), // [!code ++]
  },
});
```

Now, if the client tries calling `greet` with anything other than a string, the call will fail.

## Done!

You're now an expert at the basics of Superactions!

A good next step is to familiarise yourself with [the restrictions](/guide/restrictions) that come with using Superactions.
