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
 * @Runtime 600 ms, faster than 64.95% of JavaScript online submissions for N-ary Tree Preorder Traversal.
 * @Memory_Usage 81.1 MB, less than 9.09% of JavaScript online submissions for N-ary Tree Preorder Traversal.
 */
var preorder = function(root) {
    let res = [];

    function preOrder (node) {
        if (!node) {
            return;
        }
        res.push(node.val);
        for (let i = 0, len = node.children.length; i < len; i++) {
            preOrder(node.children[i]);
        }
    }

    preOrder(root);

    return res;
};
