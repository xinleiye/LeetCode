/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const arr = new Array(value).fill(0);
    for (const n of nums) {
        const v = n % value;
        arr[v < 0 ? value + v : v]++;
    }

    let res = 0;
    while (arr[res % value] > 0) {
        arr[res % value]--;
        res++;
    }

    return res;
};
