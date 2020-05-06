/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    let nodes = [];
    
    if (!root) {
        return [];
    }

    nodes.push(root);
    while (nodes.length) {
        let node;
        let levelNode = [];

        for (let i = 0, len = nodes.length; i < len; i++) {
            node = nodes.shift();
            levelNode.push(node.val);
            nodes.push(...node.children);
        }
        res.push(levelNode);
    }
    return res;
};
