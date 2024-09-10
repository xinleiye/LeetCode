/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    const total = nums.length;
    let res = 0;
    const pre = new Array(total + 1).fill(0);

    for (let j = 0; j < total; j++) {
        let tail = 0;

        for (let k = total - 1; k > j; k--) {
            if (nums[j] > nums[k]) {
                res += pre[nums[k]] * tail;
            } else {
                tail++;
            }
        }
        for (let v = nums[j] + 1; v < total; v++) {
            pre[v]++;
        }
    }

    return res;
};
