/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const total = nums.length;
    let minIndex = 0;
    let maxIndex = 0;

    nums.forEach((num, index) => {
        if (num > nums[maxIndex]) {
            maxIndex = index;
        } else if (num < nums[minIndex]) {
            minIndex = index;
        }
    });

    const min = Math.min(minIndex, maxIndex);
    const max = Math.max(minIndex, maxIndex);

    return Math.min(min + 1 + total - max, Math.min(max + 1, total - min));
};
