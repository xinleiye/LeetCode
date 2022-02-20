/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let res = 0;
    const numMap = new Map();

    nums.forEach((num, index) => {
        if (numMap.has(num)) {
            numMap.get(num).push(index);
        } else {
            numMap.set(num, [index]);
        }
    });

    numMap.forEach((indexs, num) => {
        const total = indexs.length;

        for (let i = 0; i < total; i++) {
            for (let j = i + 1; j < total; j++) {
                if ((indexs[i] * indexs[j]) % k === 0) {
                    res++;
                }
            }
        }
    });

    return res;
};
