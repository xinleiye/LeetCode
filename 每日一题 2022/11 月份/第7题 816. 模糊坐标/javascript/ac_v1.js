/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
    let res = [];
    const nums = s.substring(1, s.length - 1);
    const length = nums.length;

    for (let i = 1; i < length; i++) {
        const xs = getValidNumStr(nums.substring(0, i));
        const ys = getValidNumStr(nums.substring(i, length));

        for (const x of xs) {
            for (const y of ys) {
                res.push(`(${x}, ${y})`)
            }
        }
    }

    return res;
};

function getValidNumStr (str) {
    const res = [];
    const length = str.length;

    for (let i = 0; i < length; i++) {
        const numStr = `${str.substring(0, i + 1)}${i === length - 1 ? "" : "." + str.substring(i + 1, length)}`;

        if (checkNumStr(numStr)) {
            res.push(numStr);
        }
    }

    return res;
}

function checkNumStr (str) {
    if (str.length === 1) {
        return true;
    }

    // 整数
    if (str.indexOf(".") === -1) {
        return str[0] !== "0";
    }

    // 小数
    let f1 = true;
    let f2 = true;
    const [i1, i2] = str.split(".");
    if (i1.length > 1 && i1[0] === "0") {
        f1 = false;
    }
    if (i2.length === 1) {
        f2 = i2[0] !== "0";
    } else {
        f2 = i2[i2.length - 1] !== "0";
    }
    return f1 && f2;
}
