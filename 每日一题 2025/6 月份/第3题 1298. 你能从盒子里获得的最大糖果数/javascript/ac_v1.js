/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const total = status.length;
    const hasKey = new Array(total).fill(false);
    // 已经拿到的盒子，但没钥匙
    const hasBox = new Array(total).fill(false);
    let res = 0;
    // 可以打开的盒子
    const queue = [];

    for (let i = 0; i < total; i++) {
        hasKey[i] = (status[i] === 1);
    }
    for (const box of initialBoxes) {
        if (hasKey[box]) {
            queue.push(box);
        } else {
            hasBox[box] = true;
        }
    }
    while(queue.length) {
        const curBox = queue.shift();

        res += candies[curBox];
        for (const key of keys[curBox]) {
            hasKey[key] = true;
            if (hasBox[key]) {
                queue.push(key);
                hasBox[key] = false;
            }
        }
        for (const box of containedBoxes[curBox]) {
            if (hasKey[box]) {
                queue.push(box);
            } else {
                hasBox[box] = true;
            }
        }
    }

    return res;
};
