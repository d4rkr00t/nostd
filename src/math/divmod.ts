/**
 * Take two numbers as arguments and return a pair of numbers consisting of their
 * quotient and remainder when using integer division. The result is the same as (a // b, a % b).
 */
export function divmod(a: number, b: number): [number, number] {
  return [Math.floor(a / b), a % b];
}
