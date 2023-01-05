/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const nums = [];
    const words = s.split(" ");

    for (const w of words) {
        if (!isNaN(w)) {
            nums.push(Number(w));
        }
    }
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }

    return true;
};
