/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const length = nums.length;
    const res = new Array(length).fill(-1);
    const numIndexMap = new Map();
    const numArr = [];

    for (let i = 0; i < length; i++) {
        const num = nums[i];

        if (numIndexMap.has(num)) {
            const indexArr = numIndexMap.get(num);

            indexArr.push(indexArr[indexArr.length - 1] + i);
        } else {
            numIndexMap.set(num, [0, i]);
            numArr.push(num);
        }
    }
    for (const num of numArr) {
        const indexArr = numIndexMap.get(num);
        const total = indexArr.length;

        for (let i = 1; i < total; i++) {
            const index = indexArr[i] - indexArr[i - 1];

            res[index] = indexArr[total - 1] - indexArr[i] - index * (total - i - 1) + index * i - indexArr[i];
        }
    }

    return res;
};
