/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let nums = [];
    let words = s.split(' ');

    words.forEach(word => {
        if (!isNaN(word)) {
            nums.push(parseInt(word, 10));
        }
    });
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }

    return true;
};
