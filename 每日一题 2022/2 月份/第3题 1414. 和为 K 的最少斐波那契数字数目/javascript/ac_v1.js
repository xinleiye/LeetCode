/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    let nums = [];
    // 返回不大于 num 的最大斐波那契数
    let getFibonacciNum = (num) => {
        let num1 = 1;
        let num2 = 1;
        
        while (num2 <= num) {
            let tmp = num2;

            num2 = num1 + num2;
            num1 = tmp;
        }

        return num1;
    };

    while (k > 0) {
        let num = getFibonacciNum(k);
        
        nums.push(num);
        k = k - num;
    }

    return nums.length;
};
