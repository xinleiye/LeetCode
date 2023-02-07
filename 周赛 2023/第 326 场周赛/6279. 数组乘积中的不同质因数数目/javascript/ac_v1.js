/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
    const primeFactorSet = new Set();
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
    const calcPrimeFactor = (num, sets) => {
        const len = Math.floor(Math.sqrt(num));
        
        for (let i = 1; i <= len; i++) {
            if (num % i === 0) {
                const p1 = num / i;

                if (isPrime(i)) {
                    sets.add(i);
                }
                if (i !== p1 && isPrime(p1)) {
                    sets.add(p1);
                }
            }
        }
    };

    for (const n of nums) {
        calcPrimeFactor(n, primeFactorSet);
    }

    return primeFactorSet.size;
};
