/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const buff = [];
    verticalOrder(root, 0, 0, buff);
    buff.sort(([row1, col1, val1], [row2, col2, val2]) => {
        if (col1 !== col2) {
            return col1 - col2;
        } else if (row1 !== row2) {
            return row1 - row2;
        } else {
            return val1 - val2;
        }
    });

    const res = [];
    let lastCol = Number.MIN_SAFE_INTEGER;
    for (const [_, col, val] of buff) {
        if (col !== lastCol) {
            res.push([]);
            lastCol = col;
        }
        res[res.length - 1].push(val)
    }

    return res;
};

function verticalOrder(node, row, col, buff) {
    if (!node) {
        return;
    }
    buff.push([row, col, node.val]);
    verticalOrder(node.left, row + 1, col - 1, buff);
    verticalOrder(node.right, row + 1, col + 1, buff);
}
