# Validation with Joi

The library provides a small helper function that makes sure the request body matches the given schema.

To use it, you must also have `joi` installed as a dependency.

## Usage

Import the `joi` helper function and wrap the action you want to validate with it. The first argument is the schema, and the second argument is the action itself.

```ts
import { joi } from "sveltekit-superactions";
import Joi from "joi";

export const POST = superAPI({
  // ... other config
  actions: {
    // body must be a non-empty string, otherwise the request fails
    greet: joi(Joi.string().min(1), async (e, body) => {
      // the type of body is inferred as string
      return { greeting: `Hello, ${body}` };
    }),
  },
});
```
