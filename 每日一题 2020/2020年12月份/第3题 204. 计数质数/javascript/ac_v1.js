/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let res = 0;
    let isPrime = (num) => {
        if (num <= 1) {
            return false;
        } else if (num <= 3) {
            return true;
        } else {
            let part = Math.floor(Math.sqrt(num));

            for (let i = 2; i <= part; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
        }

        return true;
    };

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            res++;
        }
    }

    return res;
};
