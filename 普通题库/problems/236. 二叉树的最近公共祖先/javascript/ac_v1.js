/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ancestorP = [];
    let ancestorQ = [];
    let search = (node, ancestor, target) => {
        if (!node) {
            return false;
        }
        if (node.val === target.val) {
            ancestor.push(node);
            return true;
        }
        if (search(node.left, ancestor, target)) {
            ancestor.push(node);
            return true;
        }
        if (search(node.right, ancestor, target)) {
            ancestor.push(node);
            return true;
        };
    };

    search(root, ancestorP, p, false);
    search(root, ancestorQ, q, false);

    for (let i = 0; i < ancestorP.length; i++) {
        for (let j = 0; j < ancestorQ.length; j++) {
            if (ancestorP[i].val === ancestorQ[j].val) {
                return ancestorP[i];
            }
        }
    }
};
