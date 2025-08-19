/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const nums = num.toString().split("");
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] === "6") {
            nums[i] = "9";
            break;
        }
    }

    return Number(nums.join(""));
};
