/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    const pChar = new Array(26).fill(0);
    const sChar = new Array(26).fill(0);
    const sLen = s.length;
    let left = 0;
    let right = p.length - 1;

    for (const ch of p) {
        pChar[ch.charCodeAt(0) - 97]++;
    }
    for (let i = 0; i <= right; i++) {
        sChar[s.charCodeAt(i) - 97]++;
    }
    while (right < sLen) {
        let match = true;

        for (let i = 0; i < 26; i++) {
            if (sChar[i] !== pChar[i]) {
                match = false;
                break;
            }
        }
        if (match) {
            res.push(left);
        }
        sChar[s.charCodeAt(left) - 97]--;
        left++;
        right++;
        sChar[s.charCodeAt(right) - 97]++;
    }

    return res;
};
