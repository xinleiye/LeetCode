/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    let dfs = (node, pre) => {
        let cur = "";

        if (!node) {
            return;
        }
        if (pre === "") {
            cur = cur + node.val;
        } else {
            cur = pre + "->" + node.val;
        }
        if (node.left === null && node.right === null) {
            res.push(cur);
            return;
        }
        dfs(node.left, cur);
        dfs(node.right, cur);
    };

    dfs(root, "");

    return res;
};
