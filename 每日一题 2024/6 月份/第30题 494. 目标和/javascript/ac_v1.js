/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    return dfsSearch(nums, target, 0, 0);
};

function dfsSearch(arr, target, index, sum) {
    let count = 0;

    if (index === arr.length) {
        if (sum === target) {
            return 1;
        }
    } else {
        count += dfsSearch(arr, target, index + 1, sum + arr[index]);
        count += dfsSearch(arr, target, index + 1, sum - arr[index]);
    }

    return count;
}
