/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num >= 10 && num <= 99) {
            res++;
        } else if (num >= 1000 && num <= 9999) {
            res++;
        } else if (num >= 100000 && num <= 999999) {
            res++;
        }
    }

    return res;
};
