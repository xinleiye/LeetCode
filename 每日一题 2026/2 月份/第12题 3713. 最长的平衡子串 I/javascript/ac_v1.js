/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let res = 0;
    const total = s.length;
    const counter = new Array(26).fill(0);
    for (let i = 0; i < total; i++) {
        const index = s.charCodeAt(i) - 97;
        counter[index]++;

        const temp = counter.slice();
        for (let j = 0; j <= i; j++) {
            let valid = true;
            for (const c of temp) {
                if (c !== 0 && c !== temp[index]) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                res = Math.max(res, i - j + 1);
                break;
            }
            temp[s.charCodeAt(j) - 97]--;
        }
    }

    return res;
};
