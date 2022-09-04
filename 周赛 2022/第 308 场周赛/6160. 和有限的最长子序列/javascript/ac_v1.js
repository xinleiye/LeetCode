/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((n1, n2) => {
        return n1 - n2;
    });

    const numLen = nums.length;
    const sum = new Array(numLen + 1);
    sum[0] = nums[0];
    for (let i = 1; i < numLen; i++) {
        sum[i] = nums[i] + sum[i - 1];
    }
    sum[numLen] = 1e6 * 1e3;

    const qLen = queries.length;
    const res = new Array(qLen);
    for (let i = 0; i < qLen; i++) {
        for (let j = 0; j <= numLen; j++) {
            if (sum[j] > queries[i]) {
                res[i] = j;
                break;
            }
        }
    }
    
    return res;
};
