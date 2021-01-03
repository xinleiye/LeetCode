/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let res = new Array(nums.length).fill(0);

    nums.forEach((val, pos) => {
        for (let i = nums.length - 1; i > index[pos]; i--) {
            res[i] = res[i - 1];
        }
        res[index[pos]] = val;
    });

    return res;
};
