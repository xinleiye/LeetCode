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
 * @Runtime 580 ms, faster than 84.93% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @Memory_Usage 80.9 MB, less than 12.50% of JavaScript online submissions for Maximum Depth of N-ary Tree.
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
