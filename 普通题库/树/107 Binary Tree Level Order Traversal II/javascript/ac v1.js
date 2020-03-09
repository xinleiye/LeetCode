/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    let nodes = [];
    let node;
    let layer;
    
    if (!root) {
        return res;
    }
    
    nodes.push(root);
    while(nodes.length) {
        layer = [];
        
        for (let i = 0, len = nodes.length; i < len; i++) {
            node = nodes.shift();
            layer.push(node.val);
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
        }
        res.unshift(layer);
    }
    
    return res;
};
