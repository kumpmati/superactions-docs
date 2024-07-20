# Destructuring the client

You can use object destructuring on the client if you only care about specific parts:

```svelte
<script lang="ts">
  // instead of:
  const api = superActions<API>('/api');

  api.foo();
  api.group.bar();

  // you can use:
  const { foo, group } = superActions<API>('/api');

  foo();
  group.bar();
</script>
```
