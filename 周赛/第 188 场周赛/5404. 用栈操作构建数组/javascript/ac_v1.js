/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [];
    let targetIndex = 0;

    for (let i = 1; i <= n; i++) {
        if (i === target[targetIndex]) {
            res.push("Push");
            targetIndex++;
        } else {
            res.push("Push", "Pop");
        }
        if (targetIndex >= target.length) {
            break;
        }
    }

    return res;
};
