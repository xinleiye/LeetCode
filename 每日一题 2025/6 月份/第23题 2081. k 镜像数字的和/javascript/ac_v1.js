/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
    let base = 1;
    let count = 0;
    let res = 0n;

    while (count < n) {
        let left = base;
        const right = base * 10;

        while (count < n && left < right) {
            const num = generateNum(left, Math.floor(left / 10));

            if (isPalindrome(num, k)) {
                count++;
                res += num;
            }
            left++;
        }
        left = base;
        while (count < n && left < right) {
            const num = generateNum(left, left);

            if (isPalindrome(num, k)) {
                count++;
                res += num;
            }
            left++;
        }
        base = right;
    }

    return Number(res);
};

function generateNum(left, right) {
    let num = BigInt(left);

    while (right > 0) {
        num = num * 10n + BigInt(right % 10);
        right = Math.floor(right / 10);
    }

    return num;
}

function isPalindrome(num, k) {
    const arr = [];
    let start = 0;
    let end = 0;
    const divisor = BigInt(k);

    while (num > 0n) {
        arr.push(num % divisor);
        num = num / divisor;
        end++;
    }
    while (start < end) {
        if (arr[start] !== arr[end - 1]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}
