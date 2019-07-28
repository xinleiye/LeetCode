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
 * @Runtime 612 ms, faster than 59.09% of JavaScript online submissions for N-ary Tree Level Order Traversal.
 * @Memory_Usage 80.8 MB, less than 41.79% of JavaScript online submissions for N-ary Tree Level Order Traversal.
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
