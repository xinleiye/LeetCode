/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const lcs = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (str1[i] === str2[j]) {
                lcs[i + 1][j + 1] = lcs[i][j] + 1;
            } else {
                lcs[i + 1][j + 1] = Math.max(lcs[i][j + 1], lcs[i + 1][j]);
            }
        }
    }

    let lcsLen = lcs[len1][len2];
    const lcsStr = [];
    let pos1 = len1;
    let pos2 = len2;
    while (lcsLen) {
        if (str1[pos1 - 1] === str2[pos2 - 1]) {
            lcsStr.unshift([pos1 - 1, pos2 - 1]);
            lcsLen--;
            pos1--;
            pos2--;
        } else if (lcs[pos1][pos2 - 1] > lcs[pos1 - 1][pos2]) {
            pos2--;
        } else {
            pos1--;
        }
    }

    const res = [];
    pos1 = 0;
    pos2 = 0;
    for (const [p1, p2] of lcsStr) {
        while (pos1 < p1) {
            res.push(str1[pos1]);
            pos1++;
        }
        while (pos2 < p2) {
            res.push(str2[pos2]);
            pos2++;
        }
        res.push(str1[pos1]);
        pos1++;
        pos2++;
    }
    while (pos1 < len1) {
        res.push(str1[pos1]);
        pos1++;
    }
    while (pos2 < len2) {
        res.push(str2[pos2]);
        pos2++;
    }

    return res.join("");
};
