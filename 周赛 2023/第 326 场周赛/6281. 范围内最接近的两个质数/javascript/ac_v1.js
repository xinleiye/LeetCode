/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const primeFactors = [];
    const isPrime = (num) => {
        if (num === 1) {
            return false;
        }

        const len = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= len; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    };
    for (let i = left; i <= right; i++) {
        if (isPrime(i)) {
            primeFactors.push(i);
        }
    }

    const total = primeFactors.length;
    if (total <= 1) {
        return [-1, -1];
    }

    const res = [primeFactors[0], primeFactors[total - 1]];
    for (let i = 1; i < total; i++) {
        let prime1 = primeFactors[i - 1];
        let prime2 = primeFactors[i];
        if (prime2 - prime1 < res[1] - res[0]) {
            res[0] = prime1;
            res[1] = prime2;
        }
    }

    return res;
};
