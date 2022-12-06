/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const numSet = new Set();
    let index = 0;
    const total = word.length;
    const nums = [];

    while (index < total) {
        while (index < total && word[index] >= "0" && word[index] <= "9") {
            nums.push(word[index]);
            index++;
        }
        if (nums.length) {
            while (nums.length > 1 && nums[0] === "0") {
                nums.shift();
            }
            numSet.add(nums.join(""));
            nums.length = 0;
        }
        index++;
    }

    return numSet.size;
};
