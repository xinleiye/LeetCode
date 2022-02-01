/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let res = false;
    const numMap = new Map();

    nums.forEach((num, index) => {
        if (numMap.has(num)) {
            numMap.get(num).push(index);
        } else {
            numMap.set(num, [index]);
        }
    });
    numMap.forEach(indexs => {
        if (!res) {
            for (let i = 1; i < indexs.length; i++) {
                if (indexs[i] - indexs[i - 1] <= k) {
                    res = true;
                    break;
                }
            }
        }
    });

    return res;
};
