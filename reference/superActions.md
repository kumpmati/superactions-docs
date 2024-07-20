# `superActions`

Used to instantiate a single endpoint on the client side. The return value of this function contains all the endpoint's available actions as async functions.

## Arguments

### `path`

The URL path where the endpoint is mounted. Usually you'd use a relative path here, but it can also be an absolute URL if you're calling an endpoint hosted in a different domain.

```svelte
<!-- +page.svelte or some other .svelte file -->
<script lang="ts">
  import type { API } from './path/to/api.js';

  // api now contains all the actions of someEndpoint
  const api = superActions<API>('/my-api-path'); // [!code highlight]
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
