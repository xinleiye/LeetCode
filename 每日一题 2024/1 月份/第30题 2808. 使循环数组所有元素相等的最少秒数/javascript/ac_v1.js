/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function(nums) {
    const posMap = new Map();
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        if (posMap.has(nums[i])) {
            posMap.get(nums[i]).push(i);
        } else {
            posMap.set(nums[i], [i]);
        }
    }

    let res = total;
    posMap.forEach(pos => {
        const count = pos.length;
        let max = pos[0] + total - pos[count - 1];

        for (let i = 1; i < count; i++) {
            max = Math.max(max, pos[i] - pos[i - 1]);
        }
        res = Math.min(res, max >>> 1);
    });

    return res;
};
