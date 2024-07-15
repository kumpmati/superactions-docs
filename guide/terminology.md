# Terminology

Some terminology in the documentation is Svelte or SvelteKit-specific, but here are explanations for terms that are specific to Superactions:

## Endpoint

An endpoint under the hood just a request handler that matches incoming requests to one of the actions you've defined inside it.

An endpoint is created using the [`endpoint`](/reference/endpoint.md) function. You can create as many endpoints as you like. You just have to export the return value of the function as a POST request handler inside a `+server.ts` file, and make sure the endpoint's [`path`](/reference/endpoint.md#path) matches the route where it's exported.

## Action

An action is is an async function that receives a request event and a body, and returns a result. Actions can be created anywhere, but have to be passed to an endpoint for them to work on the client.

When the client calls an action, it makes a request to the endpoint where the action is referenced. The endpoint then executes the matching action and returns the result back to the client.
