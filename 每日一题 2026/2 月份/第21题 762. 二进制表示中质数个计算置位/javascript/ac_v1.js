/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let res = 0;

    for (let i = left; i <= right; i++) {
        if (isPrime(countBit(i))) {
            res++;
        }
    }

    return res;
};

function isPrime(num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function countBit(num) {
    let count = 0;

    while (num) {
        num = num & (num - 1);
        count++;
    }

    return count;
}
