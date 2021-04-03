/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const length1 = text1.length;
    const length2 = text2.length;
    const buff = new Array(length1 + 1);

    for (let i = 0; i <= length1; i++) {
        buff[i] = new Array(length2 + 1).fill(0);
    }

    for (let i = 1; i <= length1; i++) {
        for (let j = 1; j <= length2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                buff[i][j] = buff[i - 1][j - 1] + 1;
            } else {
                buff[i][j] = Math.max(buff[i - 1][j], buff[i][j - 1]);
            }
        }
    }

    return buff[length1][length2];
};
