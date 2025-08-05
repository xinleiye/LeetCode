/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1]];

    for (let i = 1; i < numRows; i++) {
        const pre = res[i - 1];
        const cur = new Array(i + 1);
        
        cur[0] = 1;
        cur[i] = 1;
        for (let j = 1; j < i; j++) {
            cur[j] = pre[j - 1] + pre[j];
        }
        res.push(cur);
    }

    return res;
};
