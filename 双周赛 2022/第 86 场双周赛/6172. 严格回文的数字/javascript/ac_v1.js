/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    const parseNum = (num, b) => {
        const arr = [];

        while (num >= b) {
            arr.push(num % b);
            num = Math.floor(num / b);
        }
        arr.push(num);

        return arr;
    };
    const isPalindromic = (arr) => {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            if (arr[left] !== arr[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    };

    for (let i = 2, len = n - 2; i <= len; i++) {
        if (!isPalindromic(parseNum(n, i))) {
            return false;
        }
    }

    return true;
};
