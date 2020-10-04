/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let length = nums.length;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i <= length; i++) {
        let count = 0;

        while (count < length && nums[length - count - 1] >= i) {
            count++;
        }

        if (count === i) {
            return count;
        }
    }
    
    return -1;
};
