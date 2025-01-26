/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    const nums = candidates.slice();

    nums.sort((n1, n2) => n1 - n2);
    dfsSearch([], res, target, 0, nums);

    return res;
};

function dfsSearch(stack, buff, target, start, arr) {
    if (target < 0) {
        return;
    }
    if (target === 0) {
        buff.push(stack.slice());

        return;
    }
    for (let i = start; i < arr.length; i++) {
        if (i > start && arr[i] === arr[i - 1]) {
            continue;
        }
        stack.push(arr[i]);
        dfsSearch(stack, buff, target - arr[i], i + 1, arr);
        stack.pop(arr[i]);
    }
}
