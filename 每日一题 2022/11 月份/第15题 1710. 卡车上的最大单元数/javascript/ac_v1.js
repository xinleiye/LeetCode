/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let res = 0;
    let loaded = 0;

    boxTypes.sort((b1, b2) => b2[1] - b1[1]);
    for (const [count, size] of boxTypes) {
        const need = truckSize - loaded < count ? truckSize - loaded : count;

        res += need * size;
        loaded += need;
        if (loaded === truckSize) {
            break;
        }
    }

    return res;
};
