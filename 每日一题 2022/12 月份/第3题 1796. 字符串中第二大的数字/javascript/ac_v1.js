/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let first = -1;
    let second = -1;

    for (const ch of s) {
        if (ch >= "0" && ch <= "9") {
            const n = Number(ch);

            if (n > first) {
                second = first;
                first = n;
            } else if (n !== first && n > second) {
                second = n;
            }
        }
    }

    return second;
};
