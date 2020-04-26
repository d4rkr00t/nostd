export function binarySearch<T, P>(
  arr: Array<P>,
  target: T,
  extractor?: (item: P) => T
): number {
  return binarySearchInternal(arr, target, 0, arr.length - 1, extractor);
}

function binarySearchInternal<T, P>(
  arr: Array<P>,
  target: T,
  start: number,
  end: number,
  extractor?: (item: P) => T
): number {
  if (end < start) return -1;

  let middle = Math.floor((end + start) / 2);
  let value = extractor ? extractor(arr[middle] as P) : arr[middle];

  if (value === target) {
    return middle;
  }

  if (value < target) {
    return binarySearchInternal(arr, target, middle + 1, end, extractor);
  }

  return binarySearchInternal(arr, target, start, middle - 1, extractor);
}
