/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const length = costs.length;
    const colourCount = costs[0].length;
    let buff = new Array(colourCount);

    for (let i = 0; i < colourCount; i++) {
        buff[i] = costs[0][i];
    }
    for (let i = 1; i < length; i++) {
        const newBuff = new Array(colourCount);

        for (let j = 0; j < colourCount; j++) {
            let preMin = Number.MAX_SAFE_INTEGER;

            for (let k = 0; k < colourCount; k++) {
                if (j !== k) {
                    preMin = Math.min(preMin, buff[k]);
                }
            }
            newBuff[j] = preMin + costs[i][j];
        }

        buff = newBuff;
    }

    return Math.min(...buff);
};
