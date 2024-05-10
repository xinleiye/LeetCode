/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let res = 0;
    let times = 0;

    for (const n of batteryPercentages) {
        if (n > times) {
            res++;
            times++;
        }
    }

    return res;
};
