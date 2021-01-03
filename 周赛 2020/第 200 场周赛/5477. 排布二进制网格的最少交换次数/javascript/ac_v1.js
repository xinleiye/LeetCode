/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    let res = 0;
    let maxRow = grid.length;
    let zeros = new Array(maxRow);
    let isValid = true;

    // 统计每行末尾 0 的数量
    for (let i = 0; i < maxRow; i++) {
        let num0 = 0;

        for (let j = maxRow - 1; j >= 0; j--) {
            if (grid[i][j] === 0) {
                num0++;
            } else {
                break;
            }
        }
        zeros[i] = num0;
    }

    // 贪心
    for (let i = 0; i < maxRow; i++) {
        let distance = 0;
        let num0;

        // 寻找最近的满足当前行所需 0 的数量的行
        while (distance < maxRow) {
            if (zeros[i + distance] >= maxRow - i - 1) {
                break;
            } else {
                distance++;
            }
        }

        // 未找到，说明 grid 不满足题意
        if (distance >= maxRow) {
            return -1;
        }

        // 结果加上将找到的行移动到当前行所需的步数
        res += distance;

        // 模拟移动行
        num0 = zeros[i + distance];
        for (let j = distance + i; j > i; j--) {
            zeros[j] = zeros[j - 1];
        }
        zeros[i] = num0;

        // 每次操作后，判断当前 grid 是否满足题意
        isValid = true;
        for (let j = 0; j < maxRow; j++) {
            if (zeros[j] < maxRow - j - 1) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            return res;
        }
    }
};
