# Terminology

Some terminology in the documentation is Svelte or SvelteKit-specific, but here are explanations for terms that are specific to Superactions:

## Endpoint

An endpoint under the hood is a simple request handler that matches incoming requests to one of the actions you've defined inside it.

An endpoint is created using the [`endpoint`](/reference/endpoint.md) function. You can create as many endpoints as you like, but each must be mounted on a unique route.

## Action

An action is is an async function that receives a request event and a body, and returns a result. Action functions can be created anywhere, but they have to be referenced inside an endpoint for them to work on the client.

When the client calls an action, it makes a request to the endpoint where the action is referenced. The endpoint then executes the matching action and returns the result back to the client.
