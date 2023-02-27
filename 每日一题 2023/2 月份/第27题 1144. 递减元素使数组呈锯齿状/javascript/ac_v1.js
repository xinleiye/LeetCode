/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    return Math.min(calcOp(nums, 0), calcOp(nums, 1));
};

function calcOp (arr, start) {
    let ops = 0;
    const total = arr.length;

    for (let i = start; i < total; i += 2) {
        let op = 0;
        if (i + 1 < total) {
            op = Math.max(arr[i] - arr[i + 1] + 1, op);
        }
        if (i - 1 >= 0) {
            op = Math.max(arr[i] - arr[i - 1] + 1, op);
        }
        ops += op;
    }

    return ops;
}
