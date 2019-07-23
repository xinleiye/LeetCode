/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * @Runtime 52 ms, faster than 82.07% of JavaScript online submissions for Invert Binary Tree.
 * @Memory_Usage 33.8 MB, less than 39.78% of JavaScript online submissions for Invert Binary Tree.
 */
var invertTree = function(root) {
    let temp;
    let node;
    let nodes = [];

    if (!root) {
        return null;
    }

    nodes.push(root);
    while(nodes.length) {
        node = nodes.shift();
        temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left) {
            nodes.push(node.left);
        }
        if (node.right) {
            nodes.push(node.right)
        }
    }
    
    return root;
};
