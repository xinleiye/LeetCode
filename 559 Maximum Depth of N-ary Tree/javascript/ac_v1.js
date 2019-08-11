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
 * @Runtime 592 ms, faster than 60.67% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @Memory_Usage 81.1 MB, less than 12.50% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 */
var maxDepth = function(root) {
    let nodes = [];
    let children = [];
    let depth = 0;

    if (!root) {
        return 0;
    } else {
        nodes.push(root);
    }
    while(nodes.length) {
        depth++;
        for (let item of nodes) {
            children = children.concat(item.children);
        }
        nodes = children;
        children = [];
    }
    return depth;
};
