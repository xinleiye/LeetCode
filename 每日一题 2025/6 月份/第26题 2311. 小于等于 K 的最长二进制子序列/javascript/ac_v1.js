/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let res = 0;
    const total = s.length;
    const bitsK = 32 - Math.clz32(k);
    let sufVal = 0;

    for (let i = 0; i < total; i++) {
        if (s[total - 1 - i] === "1") {
            if (i < bitsK && (sufVal | (1 << i)) <= k) {
                sufVal |= (1 << i);
                res++;
            }
        } else {
            res++;
        }
    }

    return res;    
};
