/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    if (sum % k) {
        return false;
    }

    const target = sum / k;
    const total = nums.length;
    nums.sort((n1, n2) => n1 - n2);
    if (nums[total - 1] > target) {
        return false;
    }

    const visited = new Array(1 << total).fill(true);
    const dfsSearch = (preSum, used) => {
        if (used === 0) {
            return true;
        }
        if (!visited[used]) {
            return visited[used];
        }
        visited[used] = false;
        for (let i = 0; i < total; i++) {
            if (nums[i] + preSum > target) {
                break;
            }
            if ((used & (1 << i)) !== 0) {
                if (dfsSearch((preSum + nums[i]) % target, used ^ (1 << i))) {
                    return true;
                }
            }
        }

        return false;
    };

    return dfsSearch(0, (1 << total) - 1);
};
