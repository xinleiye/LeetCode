/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const num = [];
    const numSet = new Set();
    const counter = new Array(nums.length + 1).fill(0);
    for (const n of nums) {
        counter[n]++;
        if (!numSet.has(n)) {
            num.push(n);
            numSet.add(n);
        }
    }

    const res = new Array();
    num.sort((n1, n2) => counter[n2] - counter[n1]);
    for (const n of num) {
        const len = counter[n];
        
        for (let i = 0; i < len; i++) {
            if (res[i] === undefined) {
                res[i] = [];
            }
            res[i].push(n);
        }
    }

    return res;
};
