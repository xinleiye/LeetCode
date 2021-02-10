/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1CharNum = new Array(26).fill(0);
    const length1 = s1.length;
    const s2CharNum = new Array(26).fill(0);
    const length2 = s2.length;
    let left = 0;
    let right = s1.length - 1;

    for (let i = 0; i < length1; i++) {
        s1CharNum[s1.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < length1; i++) {
        s2CharNum[s2.charCodeAt(i) - 97]++;
    }

    while (right - 1 < length2) {
        let count = 0;

        for (let i = 0; i < 26; i++) {
            if (s1CharNum[i] > 0 && s2CharNum[i] === s1CharNum[i]) {
                count += s1CharNum[i];
            }
        }

        if (count === length1) {
            return true;
        }

        s2CharNum[s2.charCodeAt(left) - 97]--;
        left++;
        right++;
        s2CharNum[s2.charCodeAt(right) - 97]++;
    }

    return false;
};
