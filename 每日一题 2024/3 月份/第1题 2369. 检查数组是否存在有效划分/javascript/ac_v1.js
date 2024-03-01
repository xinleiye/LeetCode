/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    const total = nums.length;
    const buff = new Array(3).fill(0).map(() => new Array(total).fill(false));
    const valid = (cur, dis) => {
        const pos = cur - dis;

        return buff[0][pos] || buff[1][pos] || buff[2][pos];
    };

    for (let i = 1; i < total; i++) {
        if (i > 2) {
            if (nums[i] === nums[i - 1] && valid(i, 2)) {
                buff[0][i] = true;
            }
            if (nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2] && valid(i, 3)) {
                buff[1][i] = true;
            } else if ((nums[i] - nums[i - 1] === 1) && (nums[i -1] - nums[i -2] === 1) && valid(i, 3)) {
                buff[2][i] = true;
            }
        } else if (i === 2) {
            if (nums[2] === nums[1] && nums[1] === nums[0]) {
                buff[1][2] = true;
            } else if ((nums[2] - nums[1] === 1) && (nums[1] - nums[0] === 1)) {
                buff[2][2] = true;
            }
        } else if (i === 1) {
            if (nums[1] === nums[0]) {
                buff[0][1] = true;
            }
        }
    }

    return buff[0][total - 1] || buff[1][total - 1] || buff[2][total - 1];
};
