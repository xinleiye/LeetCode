/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let index;
    let node;
    let inorderLeft;
    let inorderRight;

    if (postorder.length === 0 || inorder.length === 0) {
        return null;
    }
    index = inorder.indexOf(postorder[postorder.length - 1]);
    node = new TreeNode(postorder[postorder.length - 1]);
    inorderLeft = inorder.slice(0, index);
    inorderRight = inorder.slice(index + 1)
    node.left = buildTree(inorderLeft, postorder.slice(0, inorderLeft.length));
    node.right = buildTree(inorderRight, postorder.slice(inorderLeft.length, postorder.length - 1));

    return node;
};
