/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = "";
    let multiMap = new Map();
    let preMulti = "0";

    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    for (let i = 1; i < 10; i++) {
        preMulti = getSum(preMulti, num1);
        multiMap.set(i.toString(), preMulti);
    }

    for (let i = 0; i < num2.length; i++) {
        if (num2[i] === "0") {
            res = res + "0";
        } else {
            res = getSum(multiMap.get(num2[i]), res + "0");
        }
    }

    return res;
};
function getSum (num1, num2) {
    let res = "";
    let carry = 0;
    let length1 = num1.length;
    let length2 = num2.length;
    let index = 1;

    while (index <= length1 && index <= length2) {
        let sum = num1.charCodeAt(length1 - index) + num2.charCodeAt(length2 - index) - 48 * 2 + carry;

        res = sum % 10 + res;
        carry = (sum - sum % 10) / 10;
        index++;
    }
    while (index <= length1) {
        let sum = num1.charCodeAt(length1 - index) - 48 + carry;

        res = sum % 10 + res;
        carry = (sum - sum % 10) / 10;
        index++;
    }
    while (index <= length2) {
        let sum = num2.charCodeAt(length2 - index) - 48 + carry;

        res = sum % 10 + res;
        carry = (sum - sum % 10) / 10;
        index++;
    }
    if (carry > 0) {
        res = carry + res;
    }

    return res;
}
