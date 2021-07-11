/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let res = 0;
    const charPosMap = new Map();
    const length = s.length;
    let left = 0;

    while (left < length - 2) {
        let right = s.length - 1;

        while (charPosMap.has(s[left])) {
            left++;
        }
        while (left < right - 1) {
            if (s[left] === s[right]) {
                charPosMap.set(s[left], [left, right]);
                break;
            }
            right--;
        }
        left++;
    }

    charPosMap.forEach((pos, char) => {
        const charSet = new Set();

        for (let i = pos[0] + 1, len = pos[1] - 1; i <= len; i++) {
            if (!charSet.has(s[i])) {
                charSet.add(s[i]);
            }
        }
        res += charSet.size;
    });

    return res;
};
