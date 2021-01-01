/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    let res = -1;

    // Array 的 forEach 无法使用 return false; 中止
    nums.forEach((val, index) => {
        if (res === -1 && val === index) {
            res = index;
            // return false;
        }
    });

    return res;
};
