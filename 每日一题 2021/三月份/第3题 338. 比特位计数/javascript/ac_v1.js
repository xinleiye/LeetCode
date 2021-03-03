/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = new Array(num + 1);

    res[0] = 0;
    for (let i = 1; i <= num; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }

    return res;
};
