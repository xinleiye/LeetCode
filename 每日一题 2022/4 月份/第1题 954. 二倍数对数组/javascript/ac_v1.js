/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    const numCountMap = new Map();
    let pairCount = 0;
    const total = arr.length;

    arr.sort((n1, n2) => n1 - n2);
    for (const num of arr) {
        const count = numCountMap.get(num);

        if (count) {
            numCountMap.set(num, count + 1);
        } else {
            numCountMap.set(num, 1);
        }
    };
    for (let i = 0; i < total; i++) {
        const num = arr[i];
        const numCount = numCountMap.get(num);
        if (numCount <= 0) {
            continue;
        }
        numCountMap.set(num, numCount - 1);
        let tar = 0;
        if (num < 0) {
            if (num % 2) {
                return false;
            }
            tar = num / 2;
        } else {
            tar = num * 2;
        }
        const tarCount = numCountMap.get(tar) || 0;
        if (tarCount > 0) {
            pairCount++;
            numCountMap.set(tar, tarCount - 1);
        } else {
            return false;
        }
    }

    return pairCount * 2 === total;
};
