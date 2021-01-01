/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let left = -1e5;
    let right = 1e5;
    let minRange = right - left;
    let numsLength = nums.length;
    // 当前遍历到的，nums 中每个子数组的位置。
    let indexArr = new Array(numsLength).fill(0);
    let max = -1e5;

    for (let i = 0; i < numsLength; i++) {
        max = Math.max(nums[i][0], max);
    }

    while (true) {
        let min = nums[0][indexArr[0]];
        let minIndex = 0;
        let currentRange;

        for (let i = 0; i < numsLength; i++) {
            if (nums[i][indexArr[i]] < nums[minIndex][indexArr[minIndex]]) {
                min = nums[i][indexArr[i]];
                minIndex = i;
            }
        }

        currentRange = max - min;
        if (currentRange < minRange) {
            minRange = currentRange;
            left = min;
            right = max;
        }

        indexArr[minIndex]++;
        if (indexArr[minIndex] >= nums[minIndex].length) {
            break;
        }

        max = Math.max(max, nums[minIndex][indexArr[minIndex]]);
    }

    return [left, right];
};
