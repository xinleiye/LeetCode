/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    let i = 0;
    let length = nums.length / 2;

    while (i < length) {
        let item = nums[2 * i + 1];

        for (let j = 0, len = nums[2 * i]; j < len; j++) {
            res.push(item);
        }
        i++;
    }

    return res;
};
