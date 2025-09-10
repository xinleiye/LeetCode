/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    let res = 1;

    while (true) {
        const rest = BigInt(num1) - BigInt(num2) * BigInt(res);

        if (rest < BigInt(res)) {
            return -1;
        }
        if (res >= bitCount(rest)) {
            return res;
        }
        res++;
    }
};

function bitCount(n) {
    let count = 0;

    while (n !== 0n) {
        count++;
        n &= n - 1n;
    }

    return count;
}
