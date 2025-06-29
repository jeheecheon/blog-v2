import type { Nullable } from "../types/misc.js";

export function assert(
  condition: unknown,
  message: Error | Response | string = "Assertion failed",
): asserts condition {
  if (condition) {
    return;
  }

  if (message instanceof Error || message instanceof Response) {
    throw message;
  }

  throw new AssertionError(message);
}

export class AssertionError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "AssertionError";
  }
}

export function ensure<T>(value?: Nullable<T>, message?: string): T {
  assert(value, message);
  return value;
}
