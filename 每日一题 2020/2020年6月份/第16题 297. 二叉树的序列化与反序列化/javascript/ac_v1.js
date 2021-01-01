/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res;
    let serializeTree = (node) => {
        let nodes = [];
        let leftNodes;
        let rightNodes;

        if (!node) {
            return nodes;
        }

        leftNodes = serializeTree(node.left);
        rightNodes = serializeTree(node.right);

        nodes.push(node.val);
        if (leftNodes.length === 0) {
            nodes.push(null);
        } else {
            nodes.push(...leftNodes);
        }
        if (rightNodes.length === 0) {
            nodes.push(null);
        } else {
            nodes.push(...rightNodes);
        }
        
        return nodes;
    }

    res = serializeTree(root);

    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(",");
    let deserializeTree = (nodes) => {
        let node;

        if (nodes[0] === "") {
            nodes.shift();
            return null;
        }

        node = new TreeNode(nodes[0]);
        nodes.shift();
        node.left = deserializeTree(nodes);
        node.right = deserializeTree(nodes);

        return node;
    };

    return deserializeTree(nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
