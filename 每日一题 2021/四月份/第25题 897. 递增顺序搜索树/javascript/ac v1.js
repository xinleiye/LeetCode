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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let tmpRoot;
    let tmpNode = new TreeNode();
    const inOrder = (node) => {
        if (node === null) {
            return;
        }
        inOrder(node.left);
        tmpNode.right = node;
        node.left = null;
        tmpNode = node;
        inOrder(node.right);
    };

    tmpRoot = tmpNode;
    inOrder(root);

    return tmpRoot.right;
};
