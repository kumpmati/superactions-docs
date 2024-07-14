# Getting Started

To use Superactions, you need a SvelteKit project. You can either set up one from scratch, or use an existing one.
This guide is the same for both.

Install the library using your package manager (npm, pnpm, yarn, bun):

```bash
npm install -D sveltekit-superactions
```

## Server setup

First, we have to define an API on the server. An API is just a group of actions (fancy name for function) that we want to be able to call from client-side code as normal functions.

To define an API, use the `superAPI` function. It takes in a path and some actions, and returns a normal SvelteKit request handler that can be exportes inside a `+server.ts` file.

First, create a `+server.ts` file somewhere inside your routes folder. We'll choose `src/routes/api` this time.

Inside the `+server.ts` file, we'll call the `superAPI` function from `sveltekit-superactions`, and export its return value as a POST handler:

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

This is the relative path where your API route is mounted. Since we chose to export it at `src/routes/api/+server.ts`, path should be set as `/api`.

### `actions`

This is the object where you define all the functions that the client can call in this API. Each action becomes a function to call when using the API in the client.

## Load function

The load function is what tells the client what APIs and actions are available.

In order to access the API on the client, we need to supply the API's actions to it using a `+page.server.ts` or `+layout.server.ts` loader function. To do this, import the handler that you created using the `superAPI` function, and return its actions like so:

```ts
// src/routes/+page.layout.ts

// Since we exported the API as a POST handler,
// we'll import it here and rename it for readability.
import { POST as myAPI } from "./api/+server.js";

export const load = async () => {
  return {
    // ...other props

    // The imported handler has a property called 'actions',
    // which we need to return in the load function.
    myAPI: myAPI.actions,
  };
};
```

## Client setup

In order to setup the client, simply pass the loaded actions to the `superActions` function:

```svelte
<script lang="ts">
  import { superActions } from 'sveltekit-superactions';
  import { setContext } from 'svelte';

  export let data;

  // the client is now ready to use
  const api = superActions(data.myAPI);

  const handleClick = async () => {
    // you can call api.greet like a normal async function.
    const result = await api.greet('World');

    console.log(result); // { greeting: "Hello, World!" }
  }

  // We could also make the API accessible
  // from anywhere in the app using svelte's contexts.
  setContext('api', api);
</script>


<button on:click={handleClick}>Click me</button>
```
