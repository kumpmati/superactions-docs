# Sharing APIs using Context

If you have many places in your app that all use the same API, you can use Svelte's [Context API](https://learn.svelte.dev/tutorial/context-api) to share the API to each component without resorting to prop drilling.

```ts
// api-context.ts
import { setContext } from "svelte";
import type { API } from "../api";

// helper type for determining the client's type from the endpoint's type
import type { InferClient } from "sveltekit-superactions";

// used to set the api in a root layout or similar top-level component
export const setAPIContext = (value: InferClient<API>) => {
  setContext("api", value);
};

// used to retrieve the api in the other components
export const getAPI = () => getContext<InferClient<API>>("api");
```

These can be then used like this:

```svelte
<!-- root layout or other component high up in the tree -->

<script lang="ts">
  import { superActions } from 'sveltekit-superactions';
  import type { API } from './api';
  import { setAPIContext } from './api-context';

  const api = superActions<API>('/api');

  setAPIContext('api', api);
</script>
```

```svelte
<!-- some other .svelte file -->

<script lang="ts">
  import { getAPI } from './api-context';

  const api = getAPI();
</script>

<button onclick={() => api.foo()}>Do something</button>
```
