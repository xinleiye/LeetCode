/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let res = 1;
    const total = pairs.length;
    const lenArr = new Array(total).fill(1);

    pairs.sort((p1, p2) => p1[0] - p2[0]);
    for (let i = 0; i < total; i++) {
        let pos = i - 1;

        while (pos >= 0 && pairs[pos][1] >= pairs[i][0]) {
            pos--;
        }
        if (pos >= 0) {
            lenArr[i] = lenArr[pos] + 1;
            res = Math.max(res, lenArr[i]);
        }
    }

    return res;
};
