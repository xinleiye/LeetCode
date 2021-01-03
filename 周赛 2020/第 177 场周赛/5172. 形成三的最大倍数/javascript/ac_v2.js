/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    let res = [];
    let mod1Arr = [];
    let mod2Arr = [];
    let mod1Len = -1;
    let mod2Len = -1;
    let ascendingOrder = (val1, val2) => {
        return val2 - val1;
    }

    digits.forEach((aDigit, index) => {
        let digit = parseInt(aDigit, 10);
        let rest = digit % 3;

        if (rest === 0) {
            res.push(digit);
        } else if (rest === 1)  {
            mod1Arr.push(digit);
        } else {
            mod2Arr.push(digit);
        }
    });

    mod1Arr.sort(ascendingOrder);
    mod2Arr.sort(ascendingOrder);

    mod1Len = mod1Arr.length % 3;
    mod2Len = mod2Arr.length % 3;

    if (mod1Len === mod2Len) {
        res.push(...mod1Arr, ...mod2Arr);
    }

    if (mod1Len === 0 && mod2Len === 2) {
        if (mod1Arr.length === 0) {
            res.push(...mod2Arr.slice(0, mod2Arr.length - 2));
            res.push(...mod1Arr);
        } else {
            res.push(...mod1Arr.slice(0, mod1Arr.length - 1));
            res.push(...mod2Arr);
        }
    }

    if (mod1Len === 2 && mod2Len === 0) {
        if (mod2Arr.length === 0) {
            res.push(...mod1Arr.slice(0, mod1Arr.length - 2));
            res.push(...mod2Arr);
        } else {
            res.push(...mod2Arr.slice(0, mod2Arr.length - 1));
            res.push(...mod1Arr);
        }
    }

    if (mod2Len - mod1Len === 1) {
        res.push(...mod2Arr.slice(0, mod2Arr.length - 1));
        res.push(...mod1Arr);
    }

    if (mod1Len - mod2Len === 1) {
        res.push(...mod1Arr.slice(0, mod1Arr.length - 1));
        res.push(...mod2Arr);
    }

    res.sort(ascendingOrder);

    if (res[0] === 0) {
        return "0";
    } else {
        return res.join("");
    }
};
