/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    let res = 0;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        const num1 = getFirstNum(nums[i]);

        for (let j = i + 1; j < total; j++) {
            if (gcd(num1, nums[j] % 10) === 1) {
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

function gcd(n1, n2) {
    while (n2) {
        const n = n1 % n2;

        n1 = n2;
        n2 = n;
    }

    return n1;
}
