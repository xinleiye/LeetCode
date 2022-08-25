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
 * @return {string[][]}
 */
var printTree = function(root) {
    const calcHeight = (node) => {
        if (!node) {
            return 0;
        }

        return Math.max(calcHeight(node.left), calcHeight(node.right)) + 1;
    };
    const height = calcHeight(root);
    const maxCol = Math.pow(2, height) - 1;
    const res = new Array(height).fill(0).map(() => new Array(maxCol).fill(""));
    const dfsSearch = (node, row, col) => {
        if (!node) {
            return;
        }

        res[row][col] = String(node.val);
        dfsSearch(node.left, row + 1, col - Math.pow(2, height - row - 2));
        dfsSearch(node.right, row + 1, col + Math.pow(2, height - row - 2));
    };

    dfsSearch(root, 0, (maxCol - 1) / 2);

    return res;
};
