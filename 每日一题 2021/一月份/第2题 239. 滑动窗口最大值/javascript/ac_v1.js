/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    const deque = [];

    for (let i = 0; i < k; i++) {
        while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        deque.push(i);
    }

    res.push(nums[deque[0]]);
    for (let i = k; i < nums.length; i++) {
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        deque.push(i);
        while (deque[0] <= i - k) {
            deque.shift();
        }
        res.push(nums[deque[0]]);
    }

    return res;
};
