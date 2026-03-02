/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    let res = 0;
    const maxN = grid.length;
    const rows = new Array(maxN).fill(maxN);

    // 每一行末尾零的数量
    for (let i = 0; i < maxN; i++) {
        for (let j = maxN - 1; j >= 0; j--) {
            if (grid[i][j]) {
                rows[i] = maxN - 1 - j;
                break;
            }
        }
    }
    // 对于第 i 行，贪心地寻找最近的符合条件的行
    for (let i = 0; i < maxN - 1; i++) {
        let index = i;

        while (index < maxN && rows[index] < maxN - 1 - i) {
            index++;
        }
        if (index >= maxN) {
            return -1;
        }
        res += index - i;
        // 将第 index 至第 i + 1 行的数据向右移动一位
        for (let j = index; j > i; j--) {
            rows[j] = rows[j - 1];
        }
        rows[i] = index;
    }

    return res;
};
