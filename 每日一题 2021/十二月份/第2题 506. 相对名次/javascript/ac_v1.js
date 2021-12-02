/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const total = score.length;
    const res = new Array(score.length);
    const indexs = new Array(score.length);

    for (let i = 0; i < total; i++) {
        indexs[i] = i;
    }
    indexs.sort((val1, val2) => score[val2] - score[val1]);
    for (let i = 0; i < total; i++) {
        const index = indexs[i];

        if (i > 2) {
            res[index] = String(i + 1);
        } else if (i === 2) {
            res[index] = 'Bronze Medal';
        } else if (i === 1) {
            res[index] = 'Silver Medal';
        } else if (i === 0) {
            res[index] = 'Gold Medal';
        }
    }

    return res;
};
