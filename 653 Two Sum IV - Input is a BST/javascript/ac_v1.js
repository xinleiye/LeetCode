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
 * @Runtime 76 ms, faster than 94.67% of JavaScript online submissions for Two Sum IV - Input is a BST.
 * @Memory_Usage 42.1 MB, less than 92.31% of JavaScript online submissions for Two Sum IV - Input is a BST.
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
