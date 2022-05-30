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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let res = 0;
    const preOrder = (node, stack) => {
        if (!node) {
            return;
        }
        stack.push(node.val);
        if (!node.left && !node.right) {
            res += parseInt(stack.join(""), 2);

        }
        preOrder(node.left, stack);
        preOrder(node.right, stack);
        stack.pop();
    };

    preOrder(root, []);

    return res;
};
