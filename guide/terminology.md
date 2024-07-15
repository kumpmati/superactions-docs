# Terminology

Some terminology in the documentation is Svelte or SvelteKit-specific, but here are explanations for terms that are specific to Superactions:

## Endpoint

A group of `async` functions called [actions](#actions), defined on the server using the [`endpoint`](/reference/endpoint.md) function.

There are no restrictions to how many endpoints you can define.

## Actions

An `async` function that is defined on the server as a part of an [endpoint](#api--endpoint).

When the client calls an action, it tells the server to run the corresponding `async` function (possibly with some arguments provided by the client) on the server and returns its return value back to the client.
