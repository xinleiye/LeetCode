/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let res = [];
    let index = 0;
    const numMap = new Map();

    if (numerator / denominator < 0) {
        res.push('-');
        index++;
    }
    if (numerator < 0) {
        numerator = 0 - numerator;
    }
    if (denominator < 0) {
        denominator = 0 - denominator;
    }

    // 计算整数部分
    res.push(Math.floor(numerator / denominator));
    if (numerator % denominator === 0) {
        return res.join('');
    }
    index++;
    numerator %= denominator;
    res.push('.');
    index++;

    // 计算小数部分
    while (numerator > 0 && !numMap.has(numerator)) {
        numMap.set(numerator, index);
        numerator *= 10;
        res.push(Math.floor(numerator / denominator));
        numerator %= denominator;
        index++;
    }

    if (numerator === 0) {
        return res.join('');
    } else {
        const preIndex = numMap.get(numerator);

        return res.slice(0, preIndex).join('') + '(' + res.slice(preIndex).join('') + ')';
    }
};
