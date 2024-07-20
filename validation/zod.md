# Validation with Zod

The library provides a small helper function that makes sure the request body matches the given schema.

To use it, you must also have `zod` installed as a dependency.

## Usage

Import the `zod` helper function and wrap the action you want to validate with it. The first argument is the schema, and the second argument is the action itself.

```ts
import { zod } from "sveltekit-superactions";
import { z } from "zod";

export const POST = endpoint({
  // body must be a non-empty string, otherwise the request fails
  greet: zod(z.string().min(1), async (e, body) => {
    // the type of body is inferred as string
    return { greeting: `Hello, ${body}` };
  }),
});
```
