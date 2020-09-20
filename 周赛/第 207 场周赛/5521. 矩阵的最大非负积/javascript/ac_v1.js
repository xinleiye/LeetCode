/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    let res;
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    // 上、左
    let directions = [[-1, 0], [0, -1]];
    // productMatrix[i][j][0]: 到达格子 i,j 时的最小乘积; productMatrix[i][j][1]: 到达格子 i,j 时的最大乘积;
    let productMatrix = new Array(maxRow);
    let getMaxMin = (grid, matrix, row, col) => {
        let max = -Infinity;
        let min = Infinity;

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                let product = matrix[row + directions[j][0]][col + directions[j][1]][i] * grid[row][col];

                max = Math.max(max, product);
                min = Math.min(min, product);
            }
        }

        return [min, max];
    };

    // 生成存储乘积的 3 维数组
    for (let i = 0; i < maxRow; i++) {
        productMatrix[i] = new Array(maxCol);
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            productMatrix[i][j] = new Array(2);
        }
    }

    // 初始化数组的第 1 行和第 1 列
    productMatrix[0][0][0] = grid[0][0];
    productMatrix[0][0][1] = grid[0][0];
    for (let i = 1; i < maxCol; i++) {
        productMatrix[0][i][0] = productMatrix[0][i - 1][1] * grid[0][i];
        productMatrix[0][i][1] = productMatrix[0][i][0];
    }
    for (let i = 1; i < maxRow; i++) {
        productMatrix[i][0][0] = productMatrix[i - 1][0][0] * grid[i][0];
        productMatrix[i][0][1] = productMatrix[i][0][0];
    }

    // 动态规划
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            let maxMin = getMaxMin(grid, productMatrix, i, j);

            productMatrix[i][j][0] = maxMin[0];
            productMatrix[i][j][1] = maxMin[1];
        }
    }

    res = Math.max(productMatrix[maxRow - 1][maxCol - 1][0], productMatrix[maxRow - 1][maxCol - 1][1]);
    
    return res >= 0 ? res % (1e9 + 7) : -1;
};
