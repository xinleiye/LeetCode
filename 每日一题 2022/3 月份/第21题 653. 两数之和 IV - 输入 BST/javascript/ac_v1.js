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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const values = [];
    const inOrder = (node) => {
        if (!node) {
            return;
        }
        inOrder(node.left);
        values.push(node.val);
        inOrder(node.right);
    }
    const binarySearch = (arr, left, right, target) => {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] > target) {
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    };

    inOrder(root);
    for (let i = 0, len = values.length - 1; i < len; i++) {
        const index = binarySearch(values, i + 1, len, k - values[i]);

        if (index !== -1) {
            return true;
        }
    }

    return false;
};
