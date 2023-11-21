/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    let res = 0;
    const buff = [];
    const total = nums.length;
    let index = 0;

    while (index < total) {
        const curLen = buff.length;
        if (curLen % 2 === 0) {
            buff.push(nums[index]);
        } else {
            while (index < total && nums[index] === buff[curLen - 1]) {
                index++;
            }
            if (index < total) {
                buff.push(nums[index]);
            }
        }
        index++;
    }

    res = total - buff.length;
    if (buff.length % 2) {
        res += 1;
    }

    return res;
};
