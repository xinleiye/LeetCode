/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let count0 = 0; // 偶数
    let count1 = 0; // 奇数
    let count2 = 1; // 奇偶/偶奇相间
    const total = nums.length;

    if (nums[0] % 2 === 1) {
        count1++;
    } else {
        count0++;
    }
    for (let i = 1; i < total; i++) {
        if (nums[i] % 2 === 1) {
            count1++;
        } else {
            count0++;
        }
        if (nums[i] % 2 !== nums[i - 1] % 2) {
            count2++;
        }
    }

    return Math.max(count0, count1, count2);
};
