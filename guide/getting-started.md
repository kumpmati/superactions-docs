# Getting Started

::: warning
🚧 This library is still in an early state. There will be bugs and breaking changes before the API is stabilised for a v1.0 release, so be careful!
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

We'll begin by making an [endpoint](/guide/terminology.md#api--endpoint) on the server, and assigning one [action](/guide/terminology.md#actions) to it.

First, create a `+server.ts` file somewhere inside your routes folder. We'll choose `src/routes/api` this time.

Use the `endpoint` function to define the endpoint. It takes in an object containing all the actions you want to expose, and returns a normal SvelteKit request handler that we'll then mount inside a `+server.ts` file.

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

  // If you want to add more actions, simply put them here inside the endpoint.
  // Actions can be defined both inline, or imported from other files.

  // foo: async (e, body) => { ... }
  // bar: async (e, body) => { ... }
});

// export the API type, as we'll need it to provide type information to the client.
export type API = typeof POST;
```

In the example above, we define one action called `greet` that takes a `name` as input and returns an object containing a greeting message.

## Client setup

In order to setup the client, simply call the `superActions` function and give it the path and exported API type.
The endpoint's structure is now mirrored on the client, and you can call the actions like they are normal async functions.

```svelte
<!-- +page.svelte or +layout.svelte -->
<script lang="ts">
  import { superActions } from 'sveltekit-superactions'; // [!code highlight]
  import type { API } from './api/+server.ts'; // [!code highlight]

  // Initialize the client
  const api = superActions<API>('/api'); // [!code highlight]

  const handleClick = async () => {
    const result = await api.greet('World'); // [!code highlight]

    console.log(result); // { greeting: "Hello, World!" }
  }
</script>

<button on:click={handleClick}>Click me</button>
```

## Schema validation

Right now the client could pass in any values to the backend, so we should add validation to the action. Superactions provides small helper functions for [Zod](https://zod.dev) and [Joi](https://joi.dev/) that you can use to validate the incoming value before calling the action.

Let's use the Zod validator. Make sure to install `zod` as a dependency if you haven't already!

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

A good next step is to familiarise yourself with [few the restrictions](/guide/restrictions.md) that come with using Superactions, along with the different ways of [structuring your code](/examples/autoimport.md) in the Examples section.
