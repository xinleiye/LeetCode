/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let res = [];
    let numArr = new Array(m);
    
    for (let i = 1; i <= m; i++) {
        numArr[i - 1] = i;
    }

    for (let i = 0; i < queries.length; i++) {
        for (let j = m - 1; j >= 0; j--) {
            if (numArr[j] === queries[i]) {
                res.push(j);
                break;
            }
        }
        for (let j = res[res.length - 1]; j > 0; j--) {
            numArr[j] = numArr[j - 1];
        }
        numArr[0] = queries[i];
    }

    return res;
};
