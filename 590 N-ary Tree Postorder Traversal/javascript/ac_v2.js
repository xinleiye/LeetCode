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
 * @Memory_Usage 81.2 MB, less than 14.29% of JavaScript online submissions for N-ary Tree Postorder Traversal.
 */
var postorder = function(root) {
    let res = [];
    let nodes = [];

    if (!root) {
        return [];
    } else {
        nodes.push(root);
    }

    while (nodes.length) {
        let node = nodes.shift();

        for (let i = 0, len = node.children.length; i < len; i++ ) {
            nodes.unshift(node.children[i]);
        }
        res.unshift(node.val);
    }

    return res;
};
