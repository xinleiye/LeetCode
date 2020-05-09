/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;

    if (!root) {
        return 0;
    }
    for (let i = 0, len = root.children.length; i < len; i++) {
        depth = Math.max(depth, maxDepth(root.children[i]));
    }
    return depth + 1;
};
