/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let res = 1;
    const total = s.length;
    const buff = new Array(26).fill(0);
    const charCode = s.split("").map(ch => ch.charCodeAt() - 97);

    buff[charCode[0]] = 1;
    for (let i = 1; i < total; i++) {
        const cur = charCode[i];
        let maxLen = 0;

        for (let j = Math.max(0, cur - k), len = Math.min(cur + k, 25); j <= len; j++) {
            maxLen = Math.max(buff[j], maxLen);
        }
        buff[cur] = maxLen + 1;
    }
    for (let i = 0; i < 26; i++) {
        res = Math.max(res, buff[i]);
    }

    return res;
};
