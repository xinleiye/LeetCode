/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
    while (!isPrime(n)) {
        const primeFactors = generatePrimeFactor(n);
        let curN = 0;

        for (const n of primeFactors) {
            curN += n;
        }
        if (curN === n) {
            break;
        }
        n = curN;
    }

    return n;
};

function generatePrimeFactor (num) {
    const factor = [];

    while (!isPrime(num)) {
        const len = Math.floor(Math.sqrt(num));

        for (let i = 2; i <= len; i++) {
            if (isPrime(i) && num % i === 0) {
                factor.push(i);
                num = num / i;
                break;
            }
        }
    }
    factor.push(num);

    return factor;
}

function isPrime (num) {
    const len = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= len; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
