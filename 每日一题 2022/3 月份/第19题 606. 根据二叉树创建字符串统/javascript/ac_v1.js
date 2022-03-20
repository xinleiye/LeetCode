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
 * @return {string}
 */
var tree2str = function(root) {
    const generateStr = (val, left, right) => {
        if (!left && !right) {
            return `${val}`;
        }
        if (left && !right) {
            return `${val}(${left})`;
        }
        return `${val}(${left})(${right})`;
    };
    const dfs = (node) => {
        if (!node) {
            return "";
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        return generateStr(node.val, left, right);
    };

    return generateStr(root.val, dfs(root.left), dfs(root.right));
};
