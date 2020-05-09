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
    for (let item of root.children) {
        depth = Math.max(depth, maxDepth(item));
    }
    return depth + 1;
};
