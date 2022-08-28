/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    const nodeNum = edges.length;
    const score = new Array(nodeNum).fill(0);
    for (let i = 0; i < nodeNum; i++) {
        score[edges[i]] += i;
    }

    let res = 0;
    let max = score[0];
    for (let i = 1; i < nodeNum; i++) {
        if (score[i] > max) {
            res = i;
            max = score[i];
        }
    }

    return res;
};
