/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let res = 0;
    let arr = new Array(n + 1).fill(0);

    if (n < 2) {
        return n;
    }
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        let base = Math.floor(i / 2);

        if (i % 2 === 1) {
            arr[i] = arr[base] + arr[base + 1];
        } else {
            arr[i] = arr[base];
        }
        res = Math.max(res, arr[i]);
    }
    
    return res;
};
