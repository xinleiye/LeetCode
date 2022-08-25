/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let res = 0;
    const total = nums.length;
    
    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            const curDiff = nums[j] - nums[i];

            if (curDiff < diff) {
                continue;
            } else if (curDiff === diff) {
                for (let k = j + 1; k < total; k++) {
                    const nextDiff = nums[k] - nums[j];

                    if (nextDiff < diff) {
                        continue;
                    } else if (nextDiff === diff) {
                        res++;
                    } else {
                        break;
                    }
                }
            } else {
                break;
            }
        }
    }
    
    return res;
};
