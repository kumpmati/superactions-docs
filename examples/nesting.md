# Nesting

Superactions supports arbitrarily deep nesting for the endpoint's actions. You cannot use arrays to group or nest actions, but this is unlikely to affect sane users.

```ts
// +server.ts

export const POST = endpoint({
  // valid
  foo: async () => "hello",

  // valid
  bar: {
    baz: async () => "howdy",

    deeply: {
      nested: {
        action: async () => "hello from the nest!",
      },
    },
  },

  // invalid, but who would want to do this anyways??
  my_actions: [
    async () => "first",
    async () => "second",
    async () => "third",
    async () => "fourth",
  ],
});

export type API = typeof POST;
```

The strucure of the endpoint is then mirrored on the client:

```svelte
<!-- +page.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';

  import { superActions } from 'sveltekit-superactions';
  import type { API } from './+server.js';

  const api = superActions<API>('/')

  onMount(async () => {
    console.log(await api.foo()); // 'hello'
    console.log(await api.bar.baz()); // 'howdy'
    console.log(await api.bar.deeply.nested.action()); // 'hello from the nest!'

  })
</script>
```
