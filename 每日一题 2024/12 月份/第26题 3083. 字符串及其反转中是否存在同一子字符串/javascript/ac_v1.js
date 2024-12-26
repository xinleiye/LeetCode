/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    const arr = new Array(26).fill(0);
    const total = s.length;

    for (let i = 1; i < total; i++) {
        const x = s.charCodeAt(i - 1) - 97;
        const y = s.charCodeAt(i) - 97;

        arr[x] |= 1 << y;
        if ((arr[y] >> x & 1) > 0) {
            return true;
        }
    }

    return false;
};
