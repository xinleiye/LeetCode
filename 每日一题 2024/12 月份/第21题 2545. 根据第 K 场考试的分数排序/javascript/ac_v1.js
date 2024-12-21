/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    score.sort((r1, r2) => r2[k] - r1[k]);

    return score;
};
