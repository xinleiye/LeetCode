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
 * @Runtime 52 ms, faster than 94.32% of JavaScript online submissions for Binary Tree Level Order Traversal.
 * @Memory_Usage 34.9 MB, less than 44.86% of JavaScript online submissions for Binary Tree Level Order Traversal.
 */
var levelOrder = function(root) {
    let res = [];
    let roots = [];
    let node;
    let levelNode;
    
    if (!root) {
        return [];
    } else {
        roots.push(root);
    }
    // roots为队列FIFO
    while(roots.length) {
        let len = roots.length;

        levelNode = [];
        for (let i = 0; i < len; i++) {
            node = roots.shift();
            levelNode.push(node.val);
            if (node.left) {
                roots.push(node.left);
            }
            if (node.right) {
                roots.push(node.right);
            }
        }
        res.push(levelNode);
    }

    return res;
};
