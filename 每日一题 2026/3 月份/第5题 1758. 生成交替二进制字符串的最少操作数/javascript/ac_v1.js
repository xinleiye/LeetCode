/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let diff = 0;
    const code0 = "0".charCodeAt(0);
    const total = s.length;

    // 将 s 变为 "0101..." 需要修改的次数
    for (let i = 0; i < total; i++) {
        if (s.charCodeAt(i) - code0 !== i % 2) {
            diff++;
        }
    }

    return Math.min(diff, total - diff);
};
