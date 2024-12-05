/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    // 车和皇后在同一行且象不在二者之间
    if (a === e && (c !== a || d < Math.min(b, f) || d > Math.max(b, f))) {
        return 1;
    }

    // 车和皇后在同一列且象不在二者之间
    if (b === f && (d !== b || c < Math.min(a, e) || c > Math.max(a, e))) {
        return 1;
    }

    // 象和皇后在同一对角线且象不在二者之间
    if (Math.abs(c - e) === Math.abs(d - f) && ((c - e) * (b - f) !== (a - e) * (d - f) || a < Math.min(c, e) || a > Math.max(c, e))) {
        return 1;
    }

    return 2;
};
