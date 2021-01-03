/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    let res = [];
    let digitMap = new Map();
    let ascendingOrder = (val1, val2) => {
        return val2 - val1;
    }

    digitMap.set(1, []);
    digitMap.set(2, []);
    digits.forEach((aDigit, index) => {
        let digit = parseInt(aDigit, 10);
        let rest = digit % 3;

        if (rest === 0) {
            res.push(digit);
        } else {
            digitMap.get(rest).push(digit);
        }
    });

    digitMap.get(1).sort(ascendingOrder);
    digitMap.get(2).sort(ascendingOrder);

    let mod1 = digitMap.get(1).length % 3;
    let mod2 = digitMap.get(2).length % 3;

    if (mod1 === mod2) {
        res.push(...digitMap.get(2), ...digitMap.get(1));
    }

    if (mod1 === 0 && mod2 === 2) {
        if (digitMap.get(1).length === 0) {
            res.push(...(digitMap.get(2).slice(0, digitMap.get(2).length - 2)));
            res.push(...digitMap.get(1));
        } else {
            res.push(...(digitMap.get(1).slice(0, digitMap.get(1).length - 1)));
            res.push(...digitMap.get(2));
        }
    }

    if (mod1 === 2 && mod2 === 0) {
        if (digitMap.get(2).length === 0) {
            res.push(...(digitMap.get(1).slice(0, digitMap.get(1).length - 2)));
            res.push(...digitMap.get(2));
        } else {
            res.push(...(digitMap.get(2).slice(0, digitMap.get(2).length - 1)));
            res.push(...digitMap.get(1));
        }
    }

    if (mod2 - mod1 === 1) {
        res.push(...(digitMap.get(2).slice(0, digitMap.get(2).length - 1)));
        res.push(...digitMap.get(1));
    }

    if (mod1 - mod2 === 1) {
        res.push(...(digitMap.get(1).slice(0, digitMap.get(1).length - 1)));
        res.push(...digitMap.get(2));
    }

    res.sort(ascendingOrder);

    if (res[0] === 0) {
        return "0";
    } else {
        return res.join("");
    }
};
