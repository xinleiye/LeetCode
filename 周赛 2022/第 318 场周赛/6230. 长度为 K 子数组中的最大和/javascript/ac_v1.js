/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let res = 0;
    let left = 0;
    let right = 0;
    let sum = 0;
    const total = nums.length;
    const numMap = new Map();
    const add2Map = (map, num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    };
    const removeFromMap = (map, num) => {
        const count = map.get(num);

        if (count === 1) {
            map.delete(num);
        } else {
            map.set(num, count - 1);
        }
    };

    while (right < k) {
        sum += nums[right];
        add2Map(numMap, nums[right]);
        right++;
    }
    if (numMap.size === k) {
        res = Math.max(res, sum);
    }
    while (right < total) {
        sum -= nums[left];
        removeFromMap(numMap, nums[left]);
        sum += nums[right];
        add2Map(numMap, nums[right]);
        if (numMap.size === k) {
            res = Math.max(res, sum);
        }
        left++;
        right++;
    }

    return res;
};
