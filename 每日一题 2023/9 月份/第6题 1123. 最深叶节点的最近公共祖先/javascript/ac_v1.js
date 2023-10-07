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
var lcaDeepestLeaves = function(root) {
    const postOrderSearch = (node) => {
        if (!node) {
            return [0, node];
        }

        const [leftDeep, leftNode] = postOrderSearch(node.left);
        const [rightDeep, rightNode] = postOrderSearch(node.right);
        if (leftDeep > rightDeep) {
            return [leftDeep + 1, leftNode];
        }
        if (leftDeep < rightDeep) {
            return [rightDeep + 1, rightNode];
        }

        return [leftDeep + 1, node];
    };

    return postOrderSearch(root)[1];
};
