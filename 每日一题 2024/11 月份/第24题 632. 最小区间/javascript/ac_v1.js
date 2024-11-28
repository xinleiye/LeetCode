/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let left = -1e5;
    let right = 1e5;
    const numsLength = nums.length;
    // 当前遍历到的，nums 中每个子数组的位置。
    const indexArr = new Array(numsLength).fill(0);
    const minQueue = new MinPriorityQueue();
    let max = -1e5;

    for (let i = 0; i < numsLength; i++) {
        minQueue.enqueue(i, nums[i][indexArr[i]]);
        max = Math.max(nums[i][0], max);
    }
    while (true) {
        const minRow = minQueue.dequeue().element;
        let min = nums[minRow][indexArr[minRow]];

        if (max - min < right - left) {
            left = min;
            right = max;
        }
        if (indexArr[minRow] >= nums[minRow].length) {
            break;
        }
        indexArr[minRow]++;
        max = Math.max(max, nums[minRow][indexArr[minRow]]);
        minQueue.enqueue(minRow, nums[minRow][indexArr[minRow]]);
    }

    return [left, right];
};
