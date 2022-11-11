/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    const heightMap = new Map();
    const getHeight = (node) => {
        if (!node) {
            return 0;
        }

        const height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
        heightMap.set(node.val, height);

        return height;
    };
    getHeight(root, null, heightMap);

    const deleteHeightArr = new Array(heightMap.size + 1).fill(0);
    const getDeleteHeight = (node, depth, height) => {
        if (!node) {
            return;
        }
        ++depth;
        deleteHeightArr[node.val] = height;
        getDeleteHeight(node.left, depth, Math.max(height, depth + (node.right ? heightMap.get(node.right.val) : 0)));
        getDeleteHeight(node.right, depth, Math.max(height, depth + (node.left ? heightMap.get(node.left.val) : 0)));
    };
    getDeleteHeight(root, -1, 0);

    const res = [];
    for (const n of queries) {
        res.push(deleteHeightArr[n]);
    }

    return res;
};
