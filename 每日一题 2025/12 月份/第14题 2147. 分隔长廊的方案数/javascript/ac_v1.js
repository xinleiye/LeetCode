/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const MOD = 1e9 + 7;
    let res = 1;
    let countS = 0;
    let preS = 0;
    const total = corridor.length;

    for (let i = 0; i < total; i++) {
        if (corridor[i] === "S") {
            countS++;
            if (countS >= 3 && countS % 2) {
                res = (res * (i - preS)) % MOD;
            }
            preS = i;
        }
    }
    if (countS === 0 || countS % 2) {
        return 0;
    }

    return res;
};
