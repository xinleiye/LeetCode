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
