/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function(aliceValues, bobValues) {
    const valueArr = [];
    const total = aliceValues.length;
    let aliceSum = 0;
    let bobSum = 0;

    for (let i = 0; i < total; i++) {
        valueArr.push([aliceValues[i] + bobValues[i], aliceValues[i], bobValues[i]]);
    }
    valueArr.sort((n1, n2) => n2[0] - n1[0]);
    for (let i = 0; i < total; i++) {
        if (i % 2 === 0) {
            aliceSum += valueArr[i][1];
        } else {
            bobSum += valueArr[i][2];
        }
    }
    if (aliceSum > bobSum) {
        return 1;
    } else if (aliceSum === bobSum) {
        return 0;
    } else {
        return -1;
    }
};
