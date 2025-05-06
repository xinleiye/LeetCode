/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        const n = nums[i];
        if (n < 0) {
            continue;
        }

        let cur = i;
        while (nums[cur] !== i) {
            const next = nums[cur];
            nums[cur] = ~nums[next];
            cur = next;
        }
        nums[cur] = ~n;
    }

    for (let i = 0; i < total; i++) {
        nums[i] = ~nums[i];
    }

    return nums;
};
