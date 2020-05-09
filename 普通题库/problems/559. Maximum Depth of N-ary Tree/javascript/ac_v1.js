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
