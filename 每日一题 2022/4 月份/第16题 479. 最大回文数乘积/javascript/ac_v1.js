/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    if (n === 1) {
        return 9;
    }

    const max = Math.pow(10, n) - 1;
    for (let i = max; i > 1; i--) {
        let left = i;
        let cur = BigInt(i);
        while (left) {
            cur = cur * BigInt(10) + BigInt(left % 10);
            left = Math.floor(left / 10);
        }
        for (let num = max; num * num >= cur; num--) {
            if (cur % BigInt(num) === BigInt(0)) {
                return cur % BigInt(1337);
            }
        }
    }
};
