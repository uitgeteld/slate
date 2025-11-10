export function greet(name) {
  return `Hello, ${name}!`;
}

export const appConfig = {
  version: require('../../package.json').version,
};