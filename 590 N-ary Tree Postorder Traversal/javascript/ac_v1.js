/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 * @Runtime 600 ms, faster than 68.60% of JavaScript online submissions for N-ary Tree Postorder Traversal.
 * @Memory_Usage 81.4 MB, less than 14.29% of JavaScript online submissions for N-ary Tree Postorder Traversal.
 */
var postorder = function(root) {
    let res = [];

    function postOrder (node) {
        if (!node) {
            return;
        }
        for (let i = 0, len = node.children.length; i < len; i++) {
            postOrder(node.children[i]);
        }
        res.push(node.val);
    }

    postOrder(root);

    return res;
};
