/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];

    nums.sort((n1, n2) => n1 - n2);
    dfsSearch(nums, 0, res, []);

    return res;
};

function dfsSearch(arr, start, sets, buffer) {
    sets.push(buffer.slice());
    for (let i = start; i < arr.length; i++) {
        if (i > start && arr[i] === arr[i - 1]) {
            continue;
        }
        buffer.push(arr[i]);
        dfsSearch(arr, i + 1, sets, buffer);
        buffer.pop();
    }
}
