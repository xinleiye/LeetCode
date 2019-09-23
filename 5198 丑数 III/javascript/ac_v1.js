/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function gcd (m, n) {
    let rest;

    while (n > 0) {
        rest = m % n;
        m = n;
        n = rest;
    }
    return m;
}

var nthUglyNumber = function(n, a, b, c) {
    // 最小公倍数
    let lcmab = a * b / gcd(a, b);
    let lcmac = a * c / gcd(a, c);
    let lcmbc = b * c / gcd(b, c);
    let lcmabc = lcmab * c / gcd(lcmab, c);
    let l = 1, r = 2 * Math.pow(10, 9);

    while (l < r) {
        let mid = (l + r) >>> 1;
        // 容斥原理
        let count = Math.floor(mid / a) + Math.floor(mid / b) + Math.floor(mid / c) - Math.floor(mid / lcmab) - Math.floor(mid / lcmac) - Math.floor(mid / lcmbc) + Math.floor(mid / lcmabc);
        if (count >= n) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};
