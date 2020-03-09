/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @Runtime 52 ms, faster than 97.46% of JavaScript online submissions for Symmetric Tree.
 * @Memory_Usage 35.6 MB, less than 46.82% of JavaScript online submissions for Symmetric Tree.
 */
var isSymmetric = function(root) {
    let nodes = [];
    let n1, n2;

    nodes.push(root);
    nodes.push(root);

    while(nodes.length) {
        n1 = nodes.pop();
        n2 = nodes.pop();
        
        if (n1 === null && n2 === null) {
            continue;
        }
        if (n1 === null || n2 === null) {
            return false;
        }
        if (n1.val != n2.val) {
            return false;
        }
        nodes.push(n1.left);
        nodes.push(n2.right);
        nodes.push(n1.right);
        nodes.push(n2.left);
    }

    return true;
};
