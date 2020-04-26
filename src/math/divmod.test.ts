import test, { ExecutionContext } from "ava";
import { divmod } from "./divmod";

function macro(
  t: ExecutionContext,
  [a, b]: [number, number],
  expected: [number, number]
) {
  t.deepEqual(divmod(a, b), expected);
}

test("2, 2", macro, [2, 2], [1, 0]);
test("10, 2", macro, [10, 2], [5, 0]);
test("11, 2", macro, [11, 2], [5, 1]);
