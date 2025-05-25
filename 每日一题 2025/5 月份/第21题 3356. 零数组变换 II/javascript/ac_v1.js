/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    let left = 0;
    let right = queries.length - 1;
    let res = -1

    if (check(nums, queries, -1)) {
        return 0;
    }
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (check(nums, queries, mid)) {
            res = mid + 1;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};

function check(nums, queries, size) {
    const total = nums.length;
    const arr = new Array(total + 1).fill(0);

    for (let i = 0; i <= size; i++) {
        const [l, r, d] = queries[i];

        arr[l] += d;
        arr[r + 1] -= d;
    }
    for (let i = 1; i <= total; i++) {
        arr[i] += arr[i - 1];
    }
    for (let i = 0; i < total; i++) {
        if (nums[i] > arr[i]) {
            return false;
        }
    }

    return true;
}
