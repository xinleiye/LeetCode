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

    nums.sort((n1, n2) => n1 - n2);

    const targetSum = sum / k;
    const total = nums.length;
    if (nums[total - 1]  > targetSum) {
        return false;
    }

    const MAX = (1 << total) - 1;
    const visited = new Array(1 << total).fill(true);
    const dfsSearch = (sum, used) => {
        if (used === MAX) {
            return true;
        }
        if (!visited[used]) {
            return visited[used];
        }
        visited[used] = false;
        for (let i = 0; i < total; i++) {
            if (sum + nums[i] > targetSum) {
                break;
            }
            if (((used >>> i) & 1) === 0) {
                if (dfsSearch((sum + nums[i]) % targetSum, (used ^ (1 << i)))) {
                    return true;
                }
            }
        }

        return false;
    };

    return dfsSearch(0, 0);
};
