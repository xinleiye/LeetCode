/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function(temperatureA, temperatureB) {
    const total = temperatureA.length;
    let length = 0;
    let res = 0;

    for (let i = 1; i < total; i++) {
        const diffA = temperatureA[i] - temperatureA[i - 1];
        const diffB = temperatureB[i] - temperatureB[i - 1];

        if (diffA * diffB > 0 || (diffA === 0) && (diffB === 0)) {
            length++;
        } else {
            length = 0;
        }
        res = Math.max(res, length);
    }

    return res;
};
