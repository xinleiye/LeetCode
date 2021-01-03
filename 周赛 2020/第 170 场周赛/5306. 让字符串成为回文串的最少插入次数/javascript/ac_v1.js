/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let insertCount = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        insertCount[i] = (new Array(s.length)).fill(0);
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                insertCount[i][j] = insertCount[i + 1][j - 1];
            } else {
                insertCount[i][j] = Math.min(insertCount[i + 1][j], insertCount[i][j - 1]) + 1;
            }
        }
    }

    return insertCount[0][s.length - 1];
};
