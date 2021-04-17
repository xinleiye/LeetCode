/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let index;
    let bucket = new Map();
    let getBucketIndex = function (num, n) {
        return num < 0 ? Math.floor((num + 1) / n - 1) : Math.floor(num / n);
    }

    if (t < 0) {
        return false;
    }

    for (let i = 0, len = nums.length; i < len; i++) {
        index = getBucketIndex(nums[i], t + 1);
        if (bucket.has(index)) {
            return true;
        }
        if (bucket.has(index - 1) && Math.abs(bucket.get(index - 1) - nums[i]) <= t) {
            return true;
        }
        if (bucket.has(index + 1) && Math.abs(bucket.get(index + 1) - nums[i]) <= t) {
            return true;
        }
        bucket.set(index, nums[i]);
        if (i >= k) {
            bucket.delete(getBucketIndex(nums[i - k], t + 1));
        }
    }
    return false;
};
