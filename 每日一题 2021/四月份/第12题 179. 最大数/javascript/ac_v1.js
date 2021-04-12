/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    nums.sort((val1, val2) => {
        let num1 = "" + val1 + val2;
        let num2 = "" + val2 + val1;

        if (num1 > num2) {
            return -1;
        } else if (num1 < num2) {
            return 1;
        } else {
            return 0;
        }
    });

    return (nums[0] === 0 && nums[nums.length - 1] === 0) ? "0" : nums.join("");
};
