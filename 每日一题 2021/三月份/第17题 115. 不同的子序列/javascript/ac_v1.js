/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
    const lenS = s.length;
    const lenT = t.length;
    const buff = new Array(lenS + 1);

    if (lenS < lenT) {
        return 0;
    }

    for (let i = 0; i <= lenS; i++) {
        buff[i] = new Array(lenT + 1).fill(0);
    }

    for (let i = 0; i <= lenS; i++) {
        buff[i][lenT] = 1;
    }

    for (let i = lenS - 1; i >= 0; i--) {
        for (let j = lenT - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                buff[i][j] = buff[i + 1][j + 1] + buff[i + 1][j];
            } else {
                buff[i][j] = buff[i + 1][j];
            }
        }
    }

    return buff[0][0];
};
