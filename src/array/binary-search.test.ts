import test from "ava";
import { binarySearch } from "./binary-search";

test("should search in a sorted array of numbers [middle]", (t) => {
  let arr = Array.from(new Array(100), (_x, i) => i + 1);
  t.is(binarySearch(arr, 10), 9);
});

test("should search in a sorted array of numbers [start]", (t) => {
  let arr = Array.from(new Array(100), (_x, i) => i + 1);
  t.is(binarySearch(arr, 1), 0);
});

test("should search in a sorted array of numbers [end]", (t) => {
  let arr = Array.from(new Array(100), (_x, i) => i + 1);
  t.is(binarySearch(arr, 100), 99);
});

test("should search in a sorted array of numbers and return -1 if not found", (t) => {
  let arr = Array.from(new Array(100), (_x, i) => i + 1);
  t.is(binarySearch(arr, 101), -1);
});

test("should search in a sorted array of numbers and return -1 if not found, negative", (t) => {
  let arr = Array.from(new Array(100), (_x, i) => i + 1);
  t.is(binarySearch(arr, -2), -1);
});

test("should search in a sorted array of numbers with extractor", (t) => {
  let arr = Array.from(new Array(100), (_x, i) => ({ val: i + 1 }));
  t.is(
    binarySearch(arr, 10, (item) => item.val),
    9
  );
});

test("should search in an empty array", (t) => {
  t.is(binarySearch([], 10), -1);
});
