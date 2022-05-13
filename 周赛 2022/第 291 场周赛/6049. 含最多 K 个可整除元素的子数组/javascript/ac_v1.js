/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    const total = nums.length;
    const subArrSet = new Set();
    const pIndex = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < total; i++) {
        if (nums[i] % p === 0) {
            pIndex[i + 1] = pIndex[i] + 1; 
        } else {
            pIndex[i + 1] = pIndex[i];
        }
    }

    let left = 0;
    let right = 1;
    while (right <= total) {
        if (pIndex[right] - pIndex[left] <= k) {
            let str = "";
            for (let i = left; i < right; i++) {
                str += `${nums[i]},`;
                
                if (!subArrSet.has(str)) {
                    subArrSet.add(str);
                }
            }
            right++;
        } else {
            left++;
            let str = "";
            for (let i = left; i < right - 1; i++) {
                str += `${nums[i]},`;
                
                if (!subArrSet.has(str)) {
                    subArrSet.add(str);
                }
            }
        }
    }
    while (left < total) {
        let str = "";
        for (let i = left; i < total; i++) {
            str += `${nums[i]},`;

            if (!subArrSet.has(str)) {
                subArrSet.add(str);
            }
        }
        left++;
    }

    return subArrSet.size;
};
