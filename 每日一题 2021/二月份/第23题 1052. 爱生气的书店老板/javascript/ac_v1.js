/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let res = 0;
    let left = 0;
    let right = 0;
    let customerNS = 0;
    let maxCustomerNS = 0;
    const length = customers.length;

    customers.forEach((val, index) => {
        if (grumpy[index] === 0) {
            res += val;
        }
    });

    while (right < X) {
        if (grumpy[right] === 1) {
            customerNS += customers[right];
        }
        right++;
    }

    maxCustomerNS = customerNS;
    while (right < length) {
        if (grumpy[right] === 1) {
            customerNS += customers[right];
        }
        if (grumpy[left] === 1) {
            customerNS -= customers[left];
        }
        maxCustomerNS = Math.max(maxCustomerNS, customerNS);
        right++;
        left++;
    }

    return res + maxCustomerNS;
};
