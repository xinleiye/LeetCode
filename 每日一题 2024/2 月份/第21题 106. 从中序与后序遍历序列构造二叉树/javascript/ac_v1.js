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
    const inorderIndex = new Map();
    let rootIndex = postorder.length - 1;
    const getTree = (inLeft, inRight) => {
        if (inLeft > inRight) {
            return null;
        }

        const node = new TreeNode(postorder[rootIndex]);
        const index = inorderIndex.get(postorder[rootIndex]);
        rootIndex--;
        node.right = getTree(index + 1, inRight);
        node.left = getTree(inLeft, index - 1);

        return node;
    };

    inorder.forEach((val, index) => {
        inorderIndex.set(val, index);
    });

    return getTree(0, inorder.length - 1, postorder.lenght - 1);
};
