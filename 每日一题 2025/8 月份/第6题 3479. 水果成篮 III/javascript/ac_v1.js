/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const total = baskets.length;
    // 块大小
    const blockSize = Math.floor(Math.sqrt(total));
    // 块数量
    const blockCount = Math.ceil(total / blockSize);
    // 每块里的最大值
    const blockVal = new Array(blockCount).fill(0);
    for (let i = 0; i < total; i++) {
        const blockIndex = Math.floor(i / blockSize);
        blockVal[blockIndex] = Math.max(blockVal[blockIndex], baskets[i]);
    }

    let res = 0;
    const used = new Array(total).fill(false);
    for (const f of fruits) {
        let got = false;
        for (let i = 0; i < blockCount; i++) {
            if (blockVal[i] < f) {
                continue;
            }
            // 暂时清空当前快的最大值，方便后续被使用后更新
            blockVal[i] = 0;
            for (let j = 0; j < blockSize; j++) {
                const index = Math.min(i * blockSize + j, total - 1);
                if (!got && !used[index] && baskets[index] >= f) {
                    used[index] = true;
                    got = true;
                }
                if (!used[index]) {
                    blockVal[i] = Math.max(blockVal[i], baskets[index]);
                }
            }
            break;
        }
        if (!got) {
            res++;
        }
    }

    return res;
};
