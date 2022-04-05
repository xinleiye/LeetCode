/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
    let res = 0;
    const isPrime = (num) => {
        if (num === 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    const bitCount = (num) => {
        let count = 0;
        while (num) {
            if (num & 1) {
                count++;
            }
            num = num >> 1;
        }
        return count;
    };
    for (let i = left; i <= right; i++) {
        let count = bitCount(i);
        if (isPrime(count)) {
            res++;
        }
    }
    return res;
};
