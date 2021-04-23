import fastStringify from "fastest-stable-stringify";

/**
 * Perform a stable and fast JSON stringify based on: https://github.com/streamich/fastest-stable-stringify
 */
export function STABLE_JSON_STRINGIFY<T = any>(variables: T): string {
  return fastStringify(variables);
}
