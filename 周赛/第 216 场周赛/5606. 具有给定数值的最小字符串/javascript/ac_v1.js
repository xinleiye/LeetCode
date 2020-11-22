/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let res = new Array(n).fill("a");
    let resIndex = n - 1;
    let restValue = k - n;

    while (restValue > 0 && resIndex >= 0) {
        if (restValue >= 25) {
            res[resIndex] = "z";
            restValue -= 25;
        } else {
            res[resIndex] = String.fromCharCode(97 + restValue);
            restValue = 0;
        }
        resIndex--;
    }

    return res.join("");
};
