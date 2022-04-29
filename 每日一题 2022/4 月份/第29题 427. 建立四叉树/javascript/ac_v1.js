/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    const generateTree = (grid, row, col, length) => {
        let node = null;
        const leaf = leafInfo(grid, row, col, length);

        if (leaf !== -1) {
            node = new Node(leaf, true, null, null, null, null);
        } else {
            const half = length / 2
            const topLeft = generateTree(grid, row, col, half);
            const topRight = generateTree(grid, row, col + half, half);
            const bottomLeft = generateTree(grid, row + half, col, half);
            const bottomRight = generateTree(grid, row + half, col + half, half);

            node = new Node(grid[row][col], false, topLeft, topRight, bottomLeft, bottomRight);
        }

        return node;
    };

    return generateTree(grid, 0, 0, grid.length);
};

function leafInfo(matrix, row, col, length) {
    const flag = matrix[row][col];

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (matrix[row + i][col + j] !== flag) {
                return -1;
            }
        }
    }

    return flag;
}
