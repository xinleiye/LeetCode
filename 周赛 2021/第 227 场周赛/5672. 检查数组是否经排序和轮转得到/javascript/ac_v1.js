/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const length = nums.length;
    const numsCpy = new Array(length);
    let index = 0;

    for (let i = 0; i < length; i++) {
        numsCpy[i] = nums[i];
    }
    numsCpy.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 1; i < length; i++) {
        if (nums[i] < nums[i - 1]) {
            index = i;
            break;
        }
    }

    for (let i = 0; i < length; i++) {
        if (numsCpy[i] !== nums[(i + index) % length]) {
            return false;
        }
    }

    return true;
};
