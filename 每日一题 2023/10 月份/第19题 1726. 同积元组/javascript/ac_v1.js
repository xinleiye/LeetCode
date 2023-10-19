/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const total = nums.length;
    let res = 0;
    const multMap = new Map();

    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            const mult = nums[i] * nums[j];

            if (multMap.has(mult)) {
                multMap.set(mult, multMap.get(mult) + 1);
            } else {
                multMap.set(mult, 1);
            }
        }
    }
    multMap.forEach(count => {
        if (count >= 2) {
            res += (count * (count - 1)) / 2 * 8;
        }
    });

    return res;
};
