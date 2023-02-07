/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    score.sort((row1, row2) => row2[k] - row1[k]);
    
    return score;
};
