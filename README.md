# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

## Memo
### runtime error on remix module system

`@apollo/client` raises error in runtime about module system.
I have solved the problem by following the below articles.

- [Gotchas / Importing ESM Packages](https://remix.run/docs/en/main/guides/gotchas#importing-esm-packages)
  - [remix.config.js / serverDependenciesToBundle](https://remix.run/docs/en/main/file-conventions/remix-config#serverdependenciestobundle)

But this is odd becase the `@apollo/client` provides both of ESM and CJS modules.

### CORS error on GraphQL 
The endpoint `https://flyby-gateway.herokuapp.com/` returns 503 for a CORS preflight request.
This is not a correct behavior for the CORS preflight request.
The server must be broken in this point of view.

## Reference

- [OCTOBER 12, 2022, How to use Apollo Client with Remix, Janessa Garrow, `APOLLO CLIENT` `HOW-TO`](https://www.apollographql.com/blog/apollo-client/how-to-use-apollo-client-with-remix/)
