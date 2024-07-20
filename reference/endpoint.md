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

### `actions`

A user-defined object containing all the actions for the endpoint. Each key is an action name, and the value is the handler function for that action.

When the endpoint is used on the client, each action defined here gets its own async function inside the endpoint object that can be called by the client to execute that action on the server.

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

  const api = superActions('/path-to-api');

  const handle = async () => {
    await api.myFunction(); // [!code highlight]
  }
  </script>
```
