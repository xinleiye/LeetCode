/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let gcd = 0;
    let subStrMinLen = 0;
    let charMap = new Map();

    if (s.length <= 1) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    if (charMap.size === 1) {
        return true;
    }

    charMap.forEach(val => {
        gcd = getGcd(gcd, val);
    });

    if (gcd === 1) {
        return false;
    }
    charMap.forEach(val => {
        subStrMinLen += val / gcd;
    });

    for (let i = 1, len = Math.floor(gcd / 2); i <= len; i++) {
        let str = "";
        let subStr = s.slice(0, subStrMinLen * i);

        while (str.length < s.length) {
            str += subStr;
        }

        if (str === s) {
            return true;
        }
    }

    return false;
};

function getGcd (num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
