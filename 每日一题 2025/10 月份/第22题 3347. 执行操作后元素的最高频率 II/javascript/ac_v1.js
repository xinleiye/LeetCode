/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    const countMap = new Map();
    const diffMap = new Map();
    for (const n of nums) {
        add2Map(countMap, n);
        if (!diffMap.has(n)) {
            diffMap.set(n, 0);
        }
        add2Map(diffMap, n - k);
        sub2Map(diffMap, n + k + 1);
    }

    let res = 0;
    let diffSum = 0;
    const diffs = Array.from(diffMap.entries()).sort((e1, e2) => e1[0] - e2[0]);
    for (const [n, c] of diffs) {
        diffSum += c;
        res = Math.max(res, Math.min(diffSum, (countMap.get(n) || 0) + numOperations));
    }

    return res;
};

function add2Map(map, num) {
    if (map.has(num)) {
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
}

function sub2Map(map, num) {
    if (map.has(num)) {
        map.set(num, map.get(num) - 1);
    } else {
        map.set(num, -1);
    }
}
