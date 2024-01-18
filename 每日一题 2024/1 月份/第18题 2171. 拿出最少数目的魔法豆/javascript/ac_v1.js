/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function(beans) {
    const length = beans.length;
    const total = beans.reduce((pre, cur) => pre + cur, 0);
    let res = total;

    beans.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < length; i++) {
        res = Math.min(res, total - beans[i] * (length - i));
    }

    return res;
};
