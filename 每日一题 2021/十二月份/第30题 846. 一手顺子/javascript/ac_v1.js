/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    const countMap = new Map();

    if (hand.length % groupSize) {
        return false;
    }
    hand.sort((val1, val2) => val1 - val2);
    for (const num of hand) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    for (const num of hand) {
        if (countMap.get(num) <= 0) {
            continue;
        }
        for (let i = 0; i < groupSize; i++) {
            const tar = num + i;

            if (countMap.has(tar)) {
                const count = countMap.get(tar);

                if (count > 0) {
                    countMap.set(tar, count - 1);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    return true;
};
