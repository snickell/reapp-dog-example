export default ({ routes, route }) =>
  routes(require,
    route('app', '/', { dir: '' },
      route('dogs', '/')
    )
  );