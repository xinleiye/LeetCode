/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let editDistance;
    let len1 = word1.length;
    let len2 = word2.length;
    
    editDistance = new Array(len1 + 1);
    for (let i = 0; i <= len1; i++) {
        editDistance[i] = new Array(len2 + 1).fill(0);
    }

    for (let i = 1; i <= len1; i++) {
        editDistance[i][0] = i;
    }

    for (let i = 1; i <= len2; i++) {
        editDistance[0][i] = i;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                editDistance[i][j] = Math.min(editDistance[i - 1][j - 1], editDistance[i][j - 1] + 1, editDistance[i - 1][j] + 1);
            } else {
                editDistance[i][j] = Math.min(editDistance[i - 1][j - 1], editDistance[i][j - 1], editDistance[i - 1][j]) + 1;
            }
        }
    }

    return editDistance[len1][len2];
};
