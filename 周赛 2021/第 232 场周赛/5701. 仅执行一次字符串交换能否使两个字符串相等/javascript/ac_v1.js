/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
    let diff = 0;
    const length = s1.length;
    const charNum1 = new Array(26).fill(0);
    const charNum2 = new Array(26).fill(0);

    if (s1 === s2) {
        return true;
    }

    for (let i = 0; i < length; i++) {
        if (s1[i] !== s2[i]) {
            diff++;
        }
        charNum1[s1.charCodeAt(i) - 97]++;
        charNum2[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (charNum1[i] !== charNum2[i]) {
            return false;
        }
    }

    return diff === 2;
};
