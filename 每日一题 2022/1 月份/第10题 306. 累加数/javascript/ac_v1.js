/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const numArr = num.split("").map(item => Number(item));
    const total = num.length;
    const addTwoNum = (num1, num2) => {
        const res = [];
        let carry = 0;
        let len1 = num1.length - 1;
        let len2 = num2.length - 1;
        let sum = 0;

        while (len1 >= 0 || len2 >= 0) {
            const n1 = len1 >= 0 ? num1[len1] : 0;
            const n2 = len2 >= 0 ? num2[len2] : 0;

            sum = n1 + n2 + carry;
            carry = sum >= 10 ? 1 : 0;
            res.unshift(sum % 10);
            len1--;
            len2--;
        }
        if (carry) {
            res.unshift(carry);
        }

        return res;
    };
    const valid = (nums, num1End, num2End) => {
        let num1 = nums.slice(0, num1End);
        let num2 = nums.slice(num1End, num2End);

        while (num2End < total) {
            const num3 = addTwoNum(num1, num2);
            const num3End = num2End + num3.length;

            if (num3End > total || num3.join("") !== nums.slice(num2End, num3End).join("")) {
                return false;
            }
            if (num3End === total) {
                return true;
            }
            num1 = num2;
            num2 = num3;
            num2End = num3End;
        }

        return false;
    }

    for (let i = 1; i < total - 1; i++) {
        if (numArr[0] === 0 && i > 1) {
            break;
        }
        for (let j = i + 1; j < total; j++) {
            if (numArr[i] === 0 && j > i + 1) {
                break;
            }
            if (valid(numArr, i, j)) {
                return true;
            }
        }
    }

    return false;
};
