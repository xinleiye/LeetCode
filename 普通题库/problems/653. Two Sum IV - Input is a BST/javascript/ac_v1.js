/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let start, end, sum;
    let res = false;
    let sortedVal = [];

    function inOrder (node) {
        if (!node) {
            return;
        }
        inOrder(node.left);
        sortedVal.push(node.val);
        inOrder(node.right);
    }

    inOrder(root);

    start = 0;
    end = sortedVal.length - 1;
    while (start < end) {
        sum = sortedVal[start] + sortedVal[end];
        if (sum > k) {
            end--;
        } else if (sum < k) {
            start++;
        } else {
            res = true;
            break;
        }
    }

    return res;
};
