/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    const n1 = parseComplexNumber(num1);
    const n2 = parseComplexNumber(num2);

    return `${n1.f * n2.f - n1.v * n2.v}+${n1.f * n2.v + n1.v * n2.f}i`;
};

const parseComplexNumber = (num) => {
    const numArr = num.split("+");

    return {
        f: Number(numArr[0]),
        v: Number(numArr[1].substring(0, numArr[1].length - 1))
    };
};
