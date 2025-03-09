/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((i1, i2) => i1[0] - i2[0]);

    const total = items.length;
    for (let i = 1; i < total; i++) {
        items[i][1] = Math.max(items[i - 1][1], items[i][1]);
    }

    const res = [];
    for (const q of queries) {
        res.push(binarySearch(items, q));
    }

    return res;
};

function binarySearch(arr, target) {
    if (target < arr[0][0]) {
        return 0;
    }

    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = (left + right) >>> 1;
        if (arr[mid][0] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return arr[left - 1][1];
}
