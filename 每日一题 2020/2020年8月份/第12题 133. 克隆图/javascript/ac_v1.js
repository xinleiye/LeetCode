/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let nodeMap = new Map();
    let dfs = (node) => {
        let newNode;

        if (!node) {
            return null;
        }

        newNode = new Node(node.val);
        nodeMap.set(node.val, newNode);
        for(let item of node.neighbors) {
            if (nodeMap.has(item.val)) {
                newNode.neighbors.push(nodeMap.get(item.val));
            } else {
                newNode.neighbors.push(dfs(item));
            }
        }

        return newNode;
    };

    if (!node) {
        return null;
    }

    return dfs(node);
};
