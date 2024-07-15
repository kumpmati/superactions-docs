# Restrictions

## Serializable values

Both the return value of an action and the parameters that you pass to that action from the client must be serializable using [devalue](https://github.com/rich-harris/devalue). This means that you can pass in and return normal JSON plus things like `BigInt`, `Date`, `Map`, `Set` and `RegExp`, but NOT functions or Promises.

## Single-argument only

Actions cannot have more than 1 argument passed into them. This is mostly because it makes the library's types easier to implement, and you can pass in multiple arguments by wrapping them in a single object.

## Route-specific type information

SvelteKit automatically generates a `RequestHandler` for each route, containing type information about the available parameters and the current path.

Superactions is still in an early state, and doesn't yet have support for using this type with the `endpoint` function. This means that actions don't have full type information about the available parameters.
