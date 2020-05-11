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
