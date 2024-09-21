/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    const total = edges.length;
    const scoreArr = new Array(total).fill(0);
    let res = 0;
    let maxScore = 0;

    for (let i = 0; i < total; i++) {
        scoreArr[edges[i]] += i;
    }
    for (let i = 0; i < total; i++) {
        if (scoreArr[i] > maxScore) {
            maxScore = scoreArr[i];
            res = i;
        }
    }

    return res;
};
