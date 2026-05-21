/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const numPosMap = new Map();
    const total = nums.length;
    const queryCount = queries.length;
    const res = new Array(queries.length).fill(total);
    const pre = new Array(total);
    const post = new Array(total);

    for (let i = 0; i < total; i++) {
        if (!numPosMap.has(nums[i])) {
            numPosMap.set(nums[i], []);
        }
        numPosMap.get(nums[i]).push(i);
    }
    numPosMap.forEach(pos => {
        const length = pos.length;

        for (let i = 0; i < length; i++) {
            pre[pos[i]] = i > 0 ? pos[i - 1] : pos[length - 1] - total;
            post[pos[i]] = i < length - 1 ? pos[i + 1] : total + pos[0];
        }

    });
    for (let i = 0; i < queryCount; i++) {
        const tar = queries[i];
        const num = nums[tar];

        if (numPosMap.get(num).length === 1) {
            res[i] = -1;
        } else {
            res[i] = Math.min(tar - pre[tar], post[tar] - tar);
        }
    }

    return res;
};
