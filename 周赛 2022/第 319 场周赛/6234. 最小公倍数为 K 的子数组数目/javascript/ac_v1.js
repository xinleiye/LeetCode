/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
    let res = 0;
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        let curLcm = 1;

        for (let j = i; j < length; j++) {
            curLcm = lcm(curLcm, nums[j]);
            if (curLcm > k) {
                break;
            }
            if (curLcm === k) {
                res++;
            }
        }
    }

    return res;
};

function gcd (num1, num2) {
    while (num2) {
        const tmp = num1 % num2;

        num1 = num2;
        num2 = tmp;
    }

    return num1;
}

function lcm (num1, num2) {
    return num1 * num2 / gcd(num1, num2);
}
