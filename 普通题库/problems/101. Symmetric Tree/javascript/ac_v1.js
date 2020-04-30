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
 * @Runtime 68 ms, faster than 39.24% of JavaScript online submissions for Symmetric Tree.
 * @Memory_Usage 36 MB, less than 12.60% of JavaScript online submissions for Symmetric Tree.
 */
var isSymmetric = function(root) {
    let node;
    let nodes = [];
    let layer;
    let len;
    
    if (!root) {
        return true;
    }
    
    nodes.push(root);
    while(nodes.length) {
        len = nodes.length;
        layer = [];
        
        for(let i = 0; i < len; i++) {
            node = nodes.shift();
            if (node) {
                layer.push(node.val);
                if (node.left) {
                    nodes.push(node.left);
                } else {
                    nodes.push(null);
                }
                if (node.right) {
                    nodes.push(node.right);
                } else {
                    nodes.push(null);
                }
            } else {
                layer.push("*");
            }
        }

        for (let i = 0, len = Math.floor(layer.length / 2); i < len; i++) {
            if (layer[i] !== layer[layer.length - 1 - i]) {
                return false;
            }
        }
    }

    return true;
};
