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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    const counter = new Array(10).fill(0);

    return dfsSearch(root, counter);
};

function dfsSearch(node, counter) {
    if (!node) {
        return 0;
    }

    let res = 0;
    counter[node.val]++;
    if (!node.left && !node.right) {
        if (isPalindromic(counter)) {
            res = 1;
        }
    } else {
        res = dfsSearch(node.left, counter) + dfsSearch(node.right, counter);
    }
    counter[node.val]--;

    return res;
};

function isPalindromic(arr) {
    let odd = 0;

    for (const n of arr) {
        if (n % 2 === 1) {
            odd++;
        }
    }

    return odd <= 1;
};
