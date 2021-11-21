/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    const getDepthDfs = (node) => {
        if (!node) {
            return 0;
        }
        let depth = 0;

        if (node.children) {
            for (let item of node.children) {
                depth = Math.max(depth, getDepthDfs(item));
            }
        }

        return depth + 1;
    };

    return getDepthDfs(root);
};
