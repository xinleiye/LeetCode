/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function(s) {
    const MOD = 1e9 + 7;
    const total = s.length;
    const chars = ["a", "b", "c", "d"];
    const charCount = chars.length;
    const cache = new Array(chars.length);

    for (let i = 0; i < charCount; i++) {
        cache[i] = new Array(total);
    }
    for (let i = 0; i < charCount; i++) {
        for (let j = 0; j < total; j++) {
            cache[i][j] = new Array(total).fill(0);
        }
    }

    for (let i = 0; i < total; i++) {
        cache[s[i].charCodeAt() - 97][i][i] = 1;
    }

    for (let i = 2; i <= total; i++) {
        for (j = 0; j + i <= total; j++) {
            let k = i + j - 1;

            for (const ch of chars) {
                const index = ch.charCodeAt() - 97;



                if (s[j] === ch && s[k] === ch) {
                    cache[index][j][k] = (cache[index][j][k] + 2) % MOD;
                    for (let m = 0; m < charCount; m++) {
                        cache[index][j][k] = (cache[index][j][k] + cache[m][j + 1][k - 1]) % MOD;
                    }
                } else if (s[j] === ch) {
                    cache[index][j][k] = cache[index][j][k - 1];
                } else if (s[k] === ch) {
                    cache[index][j][k] = cache[index][j + 1][k];
                } else {
                    cache[index][j][k] = cache[index][j + 1][k - 1];
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < charCount; i++) {
        res = (res + cache[i][0][total - 1]) % MOD;
    }

    return res;
};
