/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    const charIndex = new Array(26).fill(0).map(_ => []);
    const total = s.length;
    const res = s.split("");

    for (let i = 0; i < total; i++) {
        if (s[i] === "*") {
            for (const pos of charIndex) {
                if (pos.length) {
                    res[pos.pop()] = "*";
                    break;
                }
            }
        } else {
            charIndex[s.charCodeAt(i) - 97].push(i);
        }
    }

    return res.filter(ch => ch !== "*").join("");
};
