/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split(".").map(v => Number(v));
    const v2 = version2.split(".").map(v => Number(v));
    const len1 = v1.length;
    const len2 = v2.length;
    const maxLen = Math.max(len1, len2);

    for (let i = 0; i < maxLen; i++) {
        let n1 = i < len1 ? v1[i] : 0;
        let n2 = i < len2 ? v2[i] : 0;

        if (n1 > n2) {
            return 1;
        }
        if (n1 < n2) {
            return -1;
        }
    }

    return 0;
};
