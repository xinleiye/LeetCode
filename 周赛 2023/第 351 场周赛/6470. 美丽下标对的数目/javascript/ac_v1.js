/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    let res = 0;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        const n1 = getFirstNum(nums[i]);

        for (let j = i + 1; j < total; j++) {
            if (gcd(n1, nums[j] % 10) === 1) {
                res++;
            }
        }
    }

    return res;
};

function getFirstNum(num) {
    while (num >= 10) {
        num = Math.floor(num / 10);
    }

    return num;
}

function gcd(num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
