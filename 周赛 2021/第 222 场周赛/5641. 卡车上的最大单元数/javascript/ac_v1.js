/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let res = 0;
    let restNum = truckSize;
    let index = 0;

    boxTypes.sort((item1, item2) => {
        return item2[1] - item1[1];
    });

    while (index < boxTypes.length && restNum > 0) {
        let currentNum = 0;

        if (restNum >= boxTypes[index][0]) {
            currentNum = boxTypes[index][0];
        } else {
            currentNum = restNum;
        }

        res += currentNum * boxTypes[index][1];
        restNum -= currentNum;
        index++;
    }

    return res;
};
