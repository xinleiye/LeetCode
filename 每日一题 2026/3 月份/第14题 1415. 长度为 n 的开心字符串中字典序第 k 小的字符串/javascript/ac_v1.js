/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    if (k > 3 * Math.pow(2, n - 1)) {
        return "";
    }

    let happyStr = ["a", "b", "c"];
    const chars = ["a", "b", "c"];
    for (let i = 1; i < n; i++) {
        const str = [];

        for (const s of happyStr) {
            for (const ch of chars) {
                if (ch !== s[s.length - 1]) {
                    str.push(s + ch);
                }
            }
        }
        happyStr = str;
    }

    return happyStr[k - 1];
};
