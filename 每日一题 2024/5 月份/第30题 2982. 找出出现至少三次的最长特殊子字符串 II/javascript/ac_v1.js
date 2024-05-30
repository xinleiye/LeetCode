/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const total = s.length;
    const count = Array.from({ length: 26 }, () => new Array(3).fill(0));
    let pos = 0;
    let res = 0;

    while (pos < total) {
        let len = 1;
        const index = s.charCodeAt(pos) - 97;

        pos++;
        while (pos < total && s[pos] === s[pos - 1]) {
            len++;
            pos++;
        }
        if (len > count[index][0]) {
            count[index][2] = count[index][1];
            count[index][1] = count[index][0];
            count[index][0] = len;
        } else if (len > count[index][1]) {
            count[index][2] = count[index][1];
            count[index][1] = len;
        } else if (len > count[index][2]) {
            count[index][2] = len;
        }
    }
    for (const [v1, v2, v3] of count) {
        res = Math.max(res, v1 - 2, Math.min(v1 - 1, v2), v3);
    }

    return res !== 0 ? res : -1;
};
