/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let res = s.length;
    let count0 = 0;
    let count1 = 0;
    const length = s.length;
    const getSwapStr = (start) => {
        const strArr = new Array(length);

        strArr[0] = start;
        for (let i = 1; i < length; i++) {
            if (start === "0") {
                strArr[i] = i % 2 === 1 ? "1" : "0";
            } else {
                strArr[i] = i % 2 === 1 ? "0" : "1";
            }
        }

        return strArr.join("");
    };
    const getSwapCount = (str) => {
        let diff = 0;

        for (let i = 0; i < length; i++) {
            if (str[i] !== s[i]) {
                diff++;
            }
        }

        return diff / 2;
    };

    for (let i = 0; i < length; i++) {
        if (s[i] === "0") {
            count0++;
        } else if (s[i] === "1") {
            count1++;
        }
    }

    if (Math.abs(count0 - count1) > 1) {
        return -1;
    }
    if (length % 2 === 1) {
        if (count0 > count1) {
            res = Math.min(res, getSwapCount(getSwapStr("0")));
        } else {
            res = Math.min(res, getSwapCount(getSwapStr("1")));
        }
    } else {
        res = Math.min(res, getSwapCount(getSwapStr("0")));
        res = Math.min(res, getSwapCount(getSwapStr("1")));
    }

    return res;
};
