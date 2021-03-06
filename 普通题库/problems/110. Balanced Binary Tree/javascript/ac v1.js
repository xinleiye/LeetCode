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
 */

var isBalanced = function(root) {
    let hl;
    let hr;

    if (!root) {
        return true;
    }

    hl = treeHeight(root.left);
    hr = treeHeight(root.right);
    
    if (Math.abs(hl - hr) > 1) {
        return false;
    }
    
    return isBalanced(root.left) && isBalanced(root.right);
}

function treeHeight (root) {
    let heightL;
    let heightR;

    if (!root) {
        return 0;
    }

    heightL = treeHeight(root.left);
    heightR = treeHeight(root.right);

    return heightL > heightR ? heightL + 1 : heightR + 1;
}
