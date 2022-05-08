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
var averageOfSubtree = function(root) {
    let res = 0;
    const postOrder = (node) => {
        if (!node) {
            return {
                sum: 0,
                count: 0
            };
        }
        const left = postOrder(node.left);
        const right = postOrder(node.right);
        const average = Math.floor((node.val + left.sum + right.sum) / (1 + left.count + right.count));
        if (average === node.val) {
            res++;
        }
        return {
            sum: node.val + left.sum + right.sum,
            count: 1 + left.count + right.count
        };
    };
    postOrder(root);

    return res;
};
