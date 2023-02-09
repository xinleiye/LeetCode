/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let curK = n;
    const strCh = new Array(n).fill("a");
    let index = n - 1;

    while (curK < k) {
        const diff = k - curK;

        if (diff >= 25) {
            strCh[index] = "z";
            index--;
            curK += 25;
        } else {
            strCh[index] = String.fromCharCode(97 + diff);
            curK += diff;
        }
    }

    return strCh.join("");
};
