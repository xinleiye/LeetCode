/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let index = 0;
    let currentIndex = 0;
    let preVal = nums[0];
    let count = 0;
    const length = nums.length;

    while (currentIndex < length) {
        if (nums[currentIndex] === preVal) {
            count++;
            if (count <= 2) {
                nums[index] = nums[currentIndex];
                index++;
            }
        } else {
            nums[index] = nums[currentIndex];
            preVal = nums[currentIndex];
            index++;
            count = 1;
        }
        currentIndex++;
    }

    return index;
};
