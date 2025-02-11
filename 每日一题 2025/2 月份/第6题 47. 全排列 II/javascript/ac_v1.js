/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const visited = new Array(nums.length).fill(false);
    const res = [];

    nums.sort((n1, n2) => n1 - n2);
    dfsSearch(nums, visited, [], res);

    return res;
};

function dfsSearch(arr, visitFlag, stack, res) {
    if (stack.length === arr.length) {
        res.push(stack.slice());
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visitFlag[i] || (i > 0 && arr[i] === arr[i - 1] && !visitFlag[i - 1])) {
            continue;
        }
        visitFlag[i] = true;
        stack.push(arr[i]);
        dfsSearch(arr, visitFlag, stack, res);
        visitFlag[i] = false;
        stack.pop();
    }
}
