/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const res = new Array(s.length);
    const total = s.length;
    const moveArr = new Array(total + 1).fill(0);

    for (const [s, e, d] of shifts) {
        if (d === 0) {
            moveArr[s]--;
            moveArr[e + 1]++;
        } else {
            moveArr[s]++;
            moveArr[e + 1]--;
        }
    }
    moveArr[0] = moveArr[0] % 26;
    for (let i = 1; i < total; i++) {
        moveArr[i] = (moveArr[i] + moveArr[i - 1]) % 26;
    }
    for (let i = 0; i < total; i++) {
        res[i] = String.fromCharCode(97 + ((s[i].charCodeAt() - 97 + moveArr[i] + 26) % 26));
    }

    return res.join("");
};
