/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let res = [];
    let inOrder = (node) => {
        if (!node) {
            return;
        }
        inOrder(node.left);
        res.push(node.val);
        inOrder(node.right);
    };

    inOrder(root1);
    inOrder(root2);

    res.sort((val1, val2) => {
        return val1 - val2;
    });

    return res;
};
