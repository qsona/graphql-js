import { SYMBOL_ASYNC_ITERATOR } from "../polyfills/symbols.js";
/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 */

// eslint-disable-next-line no-redeclare
export default function isAsyncIterable(maybeAsyncIterable) {
  if (maybeAsyncIterable == null || typeof maybeAsyncIterable !== 'object') {
    return false;
  }

  return typeof maybeAsyncIterable[SYMBOL_ASYNC_ITERATOR] === 'function';
}