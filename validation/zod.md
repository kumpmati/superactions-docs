# Validation with Zod

The library provides a small helper function that makes sure the request body matches the given schema.

To use it, you must also have `zod` installed as a dependency.

## Usage

Simply wrap the action you want to validate with the `zod` function. The first argument is the Zod schema, and the second argument is the action itself.

```ts
import { zod } from "sveltekit-superactions";
import { z } from "zod";

export const POST = superAPI({
  // ... other config
  actions: {
    // body must be a string, otherwise the request fails
    greet: zod(z.string(), async (e, body) => {
      // the type of body is inferred as string
      return { greeting: `Hello, ${body}` };
    }),
  },
});
```
