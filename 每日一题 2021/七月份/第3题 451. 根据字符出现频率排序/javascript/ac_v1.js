/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const charPow = new Array(256).fill(0);
    const length = s.length;
    const res = s.split("");

    for (let i = 0; i < length; i++) {
        charPow[s.charCodeAt(i)]++;
    }

    res.sort((ch1, ch2) => {
        const n1 = charPow[ch1.charCodeAt(0)];
        const n2 = charPow[ch2.charCodeAt(0)];

        if (n1 === n2) {
            if (ch1 < ch2) {
                return -1;
            } else if (ch1 === ch2) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return n2 - n1;
        }
    });

    return res.join("");
};
