/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function(source, target) {
    let res = 0;
    const colorArr = new Array(1e4 + 1).fill(0);

    source.forEach(row => {
        row.forEach(item => {
            colorArr[item]++;
        });
    });
    target.forEach(row => {
        row.forEach(item => {
            colorArr[item]--;
        });
    });
    colorArr.forEach(val => {
        if (val !== 0) {
            res += val > 0 ? val : -val;
        }
    });

    return res / 2;
};
