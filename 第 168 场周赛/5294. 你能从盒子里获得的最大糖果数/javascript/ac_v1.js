/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let res = 0;
    let curKey = 0;
    let myKeys = [];
    // 钥匙是否用过，true: 没用过；false: 用过
    let keysStatus = {};
    let myBoxes = [];
    // 箱子是否打开过，true: 没有；false: 打开过
    let boxesStatus = {};

    for (let item of initialBoxes) {
        myBoxes.push(item);
    }
    for (let i = 0; i < status.length; i++) {
        if (status[i] === 1) {
            myKeys.push(i);
        }
        keysStatus[i] = true;
        boxesStatus[i] = true;
    }

    while (curKey < myKeys.length) {
        let aKey = myKeys[curKey];

        // 没有钥匙对应的盒子 || 钥匙已经用过
        if (myBoxes.indexOf(aKey) < 0 || keysStatus[aKey] === false) {
            curKey++;
        } else {
            if (boxesStatus[aKey]) {
                res += candies[aKey];
                for (let item of keys[aKey]) {
                    myKeys.push(item);
                }
                for (let item of containedBoxes[aKey]) {
                    myBoxes.push(item);
                }
                keysStatus[aKey] = false;
                boxesStatus[aKey] = false;
                curKey = 0;
            }
        }
    }
    return res;
};
