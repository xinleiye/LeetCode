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
