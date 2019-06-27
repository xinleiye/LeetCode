/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * @result
 * Runtime: 64 ms, faster than 90.47% of JavaScript online submissions for Add Strings.
 * Memory Usage: 37.1 MB, less than 18.58% of JavaScript online submissions for Add Strings.
 */
var addStrings = function(num1, num2) {
    let res = "";
    let add1, add2;
    let maxLen = num1.length > num2.length ? num1.length : num2.length;

    function normalization (num, len) {
        let result = num;
        
        if (num.length < len) {
            for (let i = 0; i < len - num.length; i++)
            result = "0" + result;
        }
        
        return result;
    }
    
    function addTwoString (num1, num2) {
        let res = "";
        let sum = 0;
        let carry = 0;

        for (let i = maxLen - 1; i >= 0; i--) {
            sum = Number(num1[i]) + Number(num2[i]) + carry;
            res = sum % 10 + res;
            carry = Math.floor(sum / 10);
        }
        if (carry) {
            res = carry + res;
        }

        return res;
    }

    add1 = normalization(num1, maxLen);
    add2 = normalization(num2, maxLen);

    res = addTwoString(add1, add2);

    return res;

};