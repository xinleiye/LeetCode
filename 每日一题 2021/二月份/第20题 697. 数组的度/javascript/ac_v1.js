/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let res = nums.length;
    let degree = 1;
    let numMap = new Map();
    let numIndexMap = new Map();

    nums.forEach((val, index) => {
        if (numMap.has(val)) {
            const count = numMap.get(val);

            numMap.set(val, count + 1);
            degree = Math.max(degree, count + 1);
            numIndexMap.get(val)[1] = index;
        } else {
            numMap.set(val, 1);
            numIndexMap.set(val, [index, index]);
        }
    });

    numMap.forEach((val, key) => {
        if (val === degree) {
            const pos = numIndexMap.get(key);
            
            res = Math.min(res, pos[1] - pos[0] + 1);
        }
    });

    return res;
};
