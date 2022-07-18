/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
    let res = [];
    const trimMap = new Map();
    const total = nums.length;
    const length = nums[0].length;

    for (let i = 1; i <= length; i++) {
        let trims = [];
        const indexs = new Array(total);

        for (let j = 0; j < total; j++) {
            trims.push(nums[j].substr(0 - i));
            indexs[j] = j;
        }
        indexs.sort((i1, i2) => {
            if (trims[i1] < trims[i2]) {
                return -1;
            } else if (trims[i1] > trims[i2]) {
                return 1;
            } else {
                return 0;
            }
        });
        trimMap.set(i, indexs);
    }
    for (const q of queries) {
        const indexs = trimMap.get(q[1]);

        res.push(indexs[q[0] - 1]);
    }

    return res;
};
