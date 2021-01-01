function spiralOrder(matrix: number[][]): number[] {
    let res: number[];
    let totalCount: number;
    let top: number = 0;
    let right: number;
    let bottom: number = matrix.length - 1;
    let left: number = 0;
    let index: number = -1;

    if (matrix.length === 0) {
        return [];
    }

    res = new Array(matrix.length * matrix[0].length);
    totalCount = matrix.length * matrix[0].length - 1;
    right = matrix[0].length - 1;

    /*
    t t t t t t t t
    l t t t t t t r
    l l t t t t r r
    l b b b b b r r
    b b b b b b b r
    */
    while (index < totalCount) {
        // 处理上面行
        for(let i: number = left; i <= right; i++) {
            res[++index] = matrix[top][i];
        }
        top++;

        // 处理右边列
        for (let i: number = top; i <= bottom; i++) {
            res[++index] = matrix[i][right];
        }
        right--;

        // 处理下面行
        if (top <= bottom) {
            for (let i: number = right; i >= left; i--) {
                res[++index] = matrix[bottom][i];
            }
            bottom--;
        }

        // 处理左边列
        if (left <= right) {
            for (let i: number = bottom; i >= top; i--) {
                res[++index] = matrix[i][left];
            }
            left++;
        }
    }

    return res;
};
