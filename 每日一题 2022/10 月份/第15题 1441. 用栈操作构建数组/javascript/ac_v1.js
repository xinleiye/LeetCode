/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const res = [];
    const total = target.length;
    let index = 0;

    for (let i = 1; i <= n && index < total; i++) {
        if (i === target[index]) {
            res.push("Push");
            index++;
        } else {
            res.push("Push", "Pop")
        }
    }

    return res;
};
