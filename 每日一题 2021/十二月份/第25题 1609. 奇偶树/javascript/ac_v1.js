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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    let nodes = [];
    let level = 0;

    nodes.push(root);
    while (nodes.length) {
        let node;
        let diff = (level + 1) % 2;
        let preNodeVal = level % 2 ? Infinity : -Infinity;

        for (let i = 0, len = nodes.length; i < len; i++) {
            node = nodes.shift();
            if (node.val % 2 === diff) {
                if (level % 2 === 0) {
                    // 若偶数层非严格递增，返回false;
                    if (node.val <= preNodeVal) {
                        return false;
                    }
                } else {
                    // 若奇数层非严格递减，返回false;
                    if (node.val >= preNodeVal) {
                        return false;
                    }
                }
            } else {
                return false;
            }
            preNodeVal = node.val;
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
        }

        level++;
    }

    return true;
};
