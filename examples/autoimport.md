# Auto-importing actions

If you don't want to manually add each action you write to an endpoint, you can alternatively import all functions from a file (or multiple files) and spread them inside the endpoint. The end result is the same as if you had imported each one manually.

```ts
// some-file.ts

export const foo: Action = (e, body) => {
  /* ... */
};

export const bar: Action = (e, body) => {
  /* ... */
};
```

```ts
// +server.ts

import * as myActions from "./some-file"; // [!code highlight]
import * as otherActions from "./other-file"; // [!code highlight]

export const POST = endpoint({
  ...myActions, // [!code highlight]
  ...otherActions, // [!code highlight]
});
```
