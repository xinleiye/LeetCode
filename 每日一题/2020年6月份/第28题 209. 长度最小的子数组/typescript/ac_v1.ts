function minSubArrayLen(s: number, nums: number[]): number {
    let res: number = Infinity;
    let left: number = 0;
    let right: number = 0;
    let sum: number = nums[0];

    while (right < nums.length) {
        if (sum < s) {
            right++;
            sum += nums[right];
        } else {
            res = Math.min(res, right - left + 1);
            sum -= nums[left++];
        }
    }

    return res === Infinity ? 0 : res;
};
