/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarrayGCD = function(nums, k) {
    let res = 0;
    let stack = [];

    for (const n of nums) {
        if (n % k === 0) {
            stack.push(n);
            if (n === k) {
                res += stack.length;
            } else {
                if (stack.length > 1) {
                    res += checkMaxGCD(stack, k);
                }
            }
        } else {
            stack = [];
        }
    }

    return res;
};

function checkMaxGCD (arr, max) {
    let count = 0;
    const total = arr.length;
    let pre = arr[total - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        const cur = gcd(arr[i], pre);

        if (cur === max) {
            count++;
        }
        pre = cur;
    }

    return count;
}

function gcd (num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
