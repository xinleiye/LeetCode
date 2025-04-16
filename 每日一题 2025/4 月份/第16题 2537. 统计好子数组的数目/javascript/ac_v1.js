/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let res = 0;
    let left = 0;
    let right = 0;
    const numMap = new Map();
    const total = nums.length;
    let pairs = 0;

    while (right < total) {
        const countR = numMap.get(nums[right]) ?? 0;

        pairs += countR;
        numMap.set(nums[right], countR + 1);
        while (pairs >= k) {
            const countL = numMap.get(nums[left]);

            pairs -= countL - 1;
            numMap.set(nums[left], countL - 1);
            left++;
        }
        res += left;
        right++;
    }

    return res;
};
