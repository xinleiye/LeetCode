/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
    let sign = 1;
    let res = 0;
    let i = 0;

    str = str.trim();

    if (str[0] === "-") {
        sign = -1;
        i = 1;
    } else if (str[0] === "+") {
        sign = 1
        i = 1;
    }

    for (let len = str.length; i < len; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 48 && charCode <= 57) {
            res = res * 10 + charCode - 48;
            if (sign === 1 && res > INT_MAX) {
                return INT_MAX;
            }
            if (sign === -1 && res > sign * INT_MIN) {
                return INT_MIN;
            }
        } else {
            break;
        }
    }

    return res * sign;
};
