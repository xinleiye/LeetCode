/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    const res = [];
    const numCountMap = new Map();

    nums.forEach(num => {
        if (numCountMap.has(num)) {
            numCountMap.set(num, numCountMap.get(num) + 1);
        } else {
            numCountMap.set(num, 1);
        }
    });
    numCountMap.forEach((count, num) => {
        if (count === 1 && !numCountMap.has(num + 1) && !numCountMap.has(num - 1)) {
            res.push(num);
        }
    });

    return res;
};
