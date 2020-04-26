/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let res = 0;
    let sumK = 0;

    for (let i = 0; i < k; i++) {
        sumK += cardPoints[i];
    }

    res = Math.max(res, sumK);
    for (let i = 0; i < k; i++) {
        sumK -= cardPoints[k - i - 1];
        sumK += cardPoints[cardPoints.length - 1 - i];
        res = Math.max(res, sumK);
    }

    return res;
};
