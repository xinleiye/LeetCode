/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
    const isPrime = new Array(n + 1).fill(true);
    const primeArr = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primeArr.push(i);
            for (let j = i; i * j < n; j++) {
                isPrime[i * j] = false
            }
        }
    }

    if ((n % 2) && (n > 4) && isPrime[n - 2]) {
        return [[2, n - 2]];
    }

    const res = [];
    for (const p1 of primeArr) {
        const p2 = n - p1;

        if (p2 < p1) {
            break;
        }
        if (isPrime[p2]) {
            res.push([p1, p2]);
        }
    }

    return res;
};
