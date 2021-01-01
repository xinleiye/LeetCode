/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let res = 0;
    let sumMap = new Map();
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = new Array(m);
    let getSum = (num) => {
        let sum = 0;

        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    };
    let walk = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || visited[row][col] || (sumMap.get(row) + sumMap.get(col)) > k) {
            return;
        }
        res++;
        visited[row][col] = true;
        for (let k = 0; k < 4; k++) {
            walk(row + directions[k][0], col + directions[k][1]);
        }
    };

    for (let i = 0, len = Math.max(m, n); i < len; i++) {
        sumMap.set(i, getSum(i));
    }

    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }

    walk(0, 0);

    return res;
};
