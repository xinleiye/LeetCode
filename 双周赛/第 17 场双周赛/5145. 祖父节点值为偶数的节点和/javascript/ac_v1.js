/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let res = 0;
    let getChildSum = (node) => {
        let sum = 0;

        if (!node) {
            return 0;
        }
        if (node.left) {
            sum += node.left.val;
        }
        if (node.right) {
            sum += node.right.val;
        }
        return sum;
    };
    let getResult = (node) => {
        if (!node) {
            return 0;
        }
        if (node.val % 2 === 0) {
            res += getChildSum(node.left);
            res += getChildSum(node.right);
        }
        getResult(node.left);
        getResult(node.right);
    };

    getResult(root);

    return res;
};
