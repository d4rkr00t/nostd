export function binarySearch(arr, target, extractor) {
    return binarySearchInternal(arr, target, 0, arr.length - 1, extractor);
}
function binarySearchInternal(arr, target, start, end, extractor) {
    if (end < start)
        return -1;
    let middle = Math.floor((end + start) / 2);
    let value = extractor ? extractor(arr[middle]) : arr[middle];
    if (value === target) {
        return middle;
    }
    if (value < target) {
        return binarySearchInternal(arr, target, middle + 1, end, extractor);
    }
    return binarySearchInternal(arr, target, start, middle - 1, extractor);
}
//# sourceMappingURL=binary-search.js.map