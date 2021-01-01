/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    let res = 0;
    let getSum = (num) => {
        res += num;
        num && getSum(num - 1);
    };

    getSum(n);

    return res;
};
