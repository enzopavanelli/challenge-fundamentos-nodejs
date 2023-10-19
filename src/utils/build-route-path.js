export function buildRoutePath(path) {
  const routeParamentersRegex = /:([a-zA-Z]+)/g;

  const pathWithParams = path.replaceAll(
    routeParamentersRegex,
    "(?<$1>[a-z0-9-_]+)"
  );

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
