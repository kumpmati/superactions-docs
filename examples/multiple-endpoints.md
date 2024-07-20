# Multiple endpoints

Although you **probably only need one endpoint**, you are not technically limited to having just one.

Do remember that each endpoint that you define must be mounted to a unique route, and a client has to be made for each one separately.

```ts
// lib/foo.ts

import { endpoint } from "sveltekit-superactions";

export const fooEndpoint = endpoint({
  hello: async () => "hello from foo",
});
```

```ts
// routes/foo/+server.ts    <-- note the different routes for each endpoint
import { fooEndpoint } from "$lib/foo";

export const POST = fooEndpoint;
export type FooAPI = typeof POST;
```

```ts
// lib/bar.ts

export const barEndpoint = endpoint({
  greet: async () => "greetings from bar",
});
```

```ts
// routes/bar/+server.ts    <-- note the different routes for each endpoint
import { barEndpoint } from "$lib/bar";

export const POST = barEndpoint;
export type BarAPI = typeof POST;
```

```svelte
<!-- routes/+page.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';
  import { superActions } from 'sveltekit-superactions';

  import type { FooAPI } from './foo/+server.js'; // [!code highlight]
  import type { BarAPI } from './bar/+server.js'; // [!code highlight]

  const foo = superActions<FooAPI>('/foo'); // [!code highlight]
  const bar = superActions<BarAPI>('/bar'); // [!code highlight]

  onMount(async () => {
    console.log(await foo.hello()); // 'hello from foo'
    console.log(await bar.greet()); // 'greetings from bar'

  })
</script>

```
