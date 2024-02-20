/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let rootIndex = 0;
    const getTree = (inLeft, inRight) => {
        if (inLeft > inRight) {
            return null;
        }

        const node = new TreeNode(preorder[rootIndex]);
        const index = inorder.indexOf(preorder[rootIndex]);
        rootIndex++;
        node.left = getTree(inLeft, index - 1);
        node.right = getTree(index + 1, inRight);

        return node;
    };

    return getTree(0, inorder.length - 1);
};
