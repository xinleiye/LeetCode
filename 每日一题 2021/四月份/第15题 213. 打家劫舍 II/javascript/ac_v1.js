/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const length = nums.length;
    const robRange = (start, end) => {
        let pre2 = nums[start];
        let pre1 = Math.max(nums[start], nums[start + 1]);

        for (let i = start + 2; i <= end; i++) {
            let tmp = pre1;

            pre1 = Math.max(nums[i] + pre2, pre1);
            pre2 = tmp;
        }

        return pre1;
    };

    if (length === 1) {
        return nums[0];
    } else if (length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    return Math.max(robRange(0, length - 2), robRange(1, length - 1));
};
