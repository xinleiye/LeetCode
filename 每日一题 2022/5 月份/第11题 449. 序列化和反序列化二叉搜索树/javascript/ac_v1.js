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
    const res = [];
    const postOrder = (node) => {
        if (!node) {
            return;
        }
        postOrder(node.left);
        postOrder(node.right);
        res.push(node.val);
    }

    postOrder(root);

    return res.join(",");
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
    const arr = data.split(",").map(val => parseInt(val));
    const makeTree = (lower, upper, stack) => {
        if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length] > upper) {
            return null;
        }
        const val = stack.pop();
        const node = new TreeNode(val);
        node.right = makeTree(val, upper, stack);
        node.left = makeTree(lower, val, stack);
        return node;
    };

    return makeTree(-1, 1e4 + 1, arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
