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
 * @Runtime 584 ms, faster than 78.46% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @Memory_Usage 77.2 MB, less than 75.00% of JavaScript online submissions for Maximum Depth of N-ary Tree.
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
