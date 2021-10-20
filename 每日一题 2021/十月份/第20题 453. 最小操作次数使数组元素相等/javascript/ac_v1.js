/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let res = 0;
    const minNum = Math.min(...nums);

    nums.forEach(num => {
        res += num - minNum;
    });

    return res;
};
