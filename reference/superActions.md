# `superActions`

Used to instantiate a single endpoint on the client side. The return value of this function contains all the endpoint's available actions as async functions.

## Arguments

### `actions`

The actions property of the endpoint you want to instantiate. Usually you would load the endpoint's actions in a load function, and pass them in like so:

```svelte
<!-- +page.svelte or some other .svelte file -->
<script lang="ts">
  // someEndpoint is loaded from the server
  export let data;

  // api now contains all the actions of someEndpoint
  const api = superActions(data.someEndpoint); // [!code highlight]
  </script>
```

### `opts?`

Provides additional configuration for the endpoint.

Example with default values:

```ts
const api = superActions(data.someEndpoint, {
  followRedirects: false,
});
```

#### `followRedirects?: boolean`

Default: `false`.

When set to `true`, if any action in this endpoint returns a redirect, navigate to the URL that it redirected to.

You can also override this value for each action by providing an object containing this property as the second argument when calling that action.
