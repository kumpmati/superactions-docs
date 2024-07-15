# `endpoint`

Used to build an endpoint that holds one or more action(s), where an action is a function that the client can call like a normal `async` function. It returns a request handler function that can be mounted as a POST handler in a [+server.ts](https://kit.svelte.dev/docs/routing#server) file like so:

```ts
// src/routes/.../+server.ts

import { endpoint } from "sveltekit-superactions";

export const POST = endpoint({
  // ...
});
```

## Arguments

### `path`

A string referencing the relative path where the endpoint is mounted. If you mount the endpoint at `src/routes/api/+server.ts`, the `path` should be `/api`.

This path must be correct, otherwise all calls to this endpoint fail.

### `actions`

An object containing all the actions for the endpoint. Each key is an action name, and the value is the handler function for that action.

When properly initialised, each key in this object is available on the client as an async function of the same name.

Example:

```ts
// On the server

export const POST = endpoint({
  // ...
  actions: {
    myFunction: async () => {}, // [!code highlight]
  },
});
```

```svelte
<!-- On the client -->

 <script lang="ts">

  // ...
  export let data;

  const api = superActions(data.myAPI);

  const handle = async () => {
    await api.myFunction(); // [!code highlight]
  }
  </script>
```
