/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const res = [];

    for (let n1 of nums) {
        while (res.length) {
            const n2 = res.pop();
            const g = gcd(n1, n2);

            if (g > 1) {
                n1 = n1 / g * n2;
            } else {
                res.push(n2);
                break;
            }
        }
        res.push(n1);
    }

    return res;
};

function gcd(num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
