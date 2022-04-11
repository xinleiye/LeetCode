/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {
    const nums = expression.split("+");
    const [leftNum, rightNum] = nums.map(n => Number(n));
    const [leftLen, rightLen] = nums.map(n => n.length);
    const splitNum = (num, pow) => {
        let num1 = num % pow;
        let num0 = (num - num1) / pow;
        return [num0, num1];
    }

    let min = Math.pow(2, 31) - 1;
    let minExp = '';
    for (let i = 0; i < leftLen; i++) {
        const left = splitNum(leftNum, Math.pow(10, i + 1));

        for (let j = rightLen; j >= 0 ; j--) {
            const right = splitNum(rightNum, Math.pow(10, j));

            if (right[0] > 0) {
                const val = (left[0] > 0 ? left[0] : 1) * (left[1] + right[0]) * (right[1] > 0 ? right[1] : 1);
                if (val < min) {
                    min = val;
                    minExp = `${left[0] > 0 ? left[0] : ""}(${left[1]}+${right[0]})${right[1] > 0 ? right[1] : ""}`;
                }
            }
        }
    }

    return minExp;
};
