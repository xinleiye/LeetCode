/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let str1Len = s1.length;
    let str2Len = s2.length;
    let deleCost = new Array(str1Len + 1);

    for (let i = 0; i <= str1Len; i++) {
        deleCost[i] = new Array(str2Len + 1).fill(0);
    }

    for (let i = 1; i <= str2Len; i++) {
        deleCost[0][i] = deleCost[0][i - 1] + s2.charCodeAt(i - 1);
    }

    for (let i = 1; i <= str1Len; i++) {
        deleCost[i][0] = deleCost[i - 1][0] + s1.charCodeAt(i - 1);
    }

    for (let i = 1; i <= str1Len; i++) {
        for (let j = 1; j <= str2Len; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                deleCost[i][j] = deleCost[i - 1][j - 1];
            } else {
                deleCost[i][j] = Math.min(deleCost[i - 1][j] + s1.charCodeAt(i - 1), deleCost[i][j - 1] + s2.charCodeAt(j - 1));
            }
        }
    }

    return deleCost[str1Len][str2Len];
};
