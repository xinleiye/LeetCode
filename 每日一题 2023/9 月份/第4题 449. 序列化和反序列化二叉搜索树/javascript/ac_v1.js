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
    const vals = [];
    const postOrder = (root, buff) => {
        if (!root) {
            return;
        }
        postOrder(root.left, buff);
        postOrder(root.right, buff);
        buff.push(root.val);
    };
    postOrder(root, vals);

    return vals.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0) {
        return null;
    }

    const vals = data.split(",");
    const nodes = [];
    const makeTree = (lower, upper, buff) => {
        const total = buff.length;
        if (total === 0 || buff[total - 1] < lower || buff[total - 1] > upper) {
            return null;
        }

        const val = buff.pop();
        const root = new TreeNode(val);
        root.right = makeTree(val, upper, buff);
        root.left = makeTree(lower, val, buff);

        return root;
    };
    for (const v of vals) {
        nodes.push(parseInt(v));
    }

    return makeTree(-1, 1e4 + 1, nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
