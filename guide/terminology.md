# Terminology

Some terminology in the documentation is Svelte or SvelteKit-specific, but here are explanations for terms that are specific to Superactions:

## Endpoint

An endpoint under the hood is a simple request handler that matches incoming requests to one of the actions you've defined inside it.

An endpoint is created using the [`endpoint`](/reference/endpoint.md) function. You can create as many endpoints as you like, but each endpoint must be exported as a POST request handler inside its own `+server.ts` file. Make also sure that each endpoint's [`path`](/reference/endpoint.md#path) matches the route where it's exported.

The routes of two endpoints cannot be the same.

## Action

An action is is an async function that receives a request event and a body, and returns a result. Actions can be created anywhere, but have to be passed to an endpoint for them to work on the client.

When the client calls an action, it makes a request to the endpoint where the action is referenced. The endpoint then executes the matching action and returns the result back to the client.
