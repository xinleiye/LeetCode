/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let createTree = (start, end) => {
        let trees = [];

        if (start > end) {
            return [null];
        }
        for (let i = start; i <= end; i++) {
            let leftTree = createTree(start, i - 1);
            let rightTree = createTree(i + 1, end);

            for (let j = 0; j < leftTree.length; j++) {
                for (let k = 0; k < rightTree.length; k++) {
                    let root = new TreeNode(i);

                    root.left = leftTree[j];
                    root.right = rightTree[k];

                    trees.push(root);
                }
            }
        }

        return trees;
    };

    if (n < 1) {
        return [];
    }

    return createTree(1, n);
};
function TreeNode (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
