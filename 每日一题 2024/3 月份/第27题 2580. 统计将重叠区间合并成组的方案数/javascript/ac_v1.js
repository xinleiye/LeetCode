/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function(ranges) {
    const MOD = 1e9 + 7;
    let res = 1;
    const total = ranges.length;
    let index = 0;
    let rangeGroupCount = 0;

    ranges.sort((r1, r2) => {
        return r1[0] !== r2[0] ? r1[0] - r2[0] : r1[1] - r2[1];
    });
    while (index < total) {
        let right = ranges[index][1];

        while (index < total) {
            let cur = ranges[index];

            if (right < cur[0]) {
                break;
            }
            right = Math.max(right, cur[1]);
            index++;
        }
        rangeGroupCount++;
    }
    for (let i = 0; i < rangeGroupCount; i++) {
        res = (res * 2) % MOD;
    }

    return res;
};
