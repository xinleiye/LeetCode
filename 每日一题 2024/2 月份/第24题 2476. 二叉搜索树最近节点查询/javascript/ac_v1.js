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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function(root, queries) {
    const res = [];
    const vals = [];

    inOrder(root, vals);
    for (const n of queries) {
        let minVal = -1;
        let maxVal = -1;
        let index = binarySearch(vals, n);

        if (index !== vals.length) {
            maxVal = vals[index];
        }
        if (vals[index] === n) {
            minVal = vals[index];
        } else {
            if (index !== 0) {
                minVal = vals[index - 1];
            }
        }
        res.push([minVal, maxVal]);
    }

    return res;
};

function inOrder(node, buffer) {
    if (!node) {
        return;
    }
    inOrder(node.left, buffer);
    buffer.push(node.val);
    inOrder(node.right, buffer);
}

function binarySearch(arr, tar) {
    let left = 0;
    let right = arr.length - 1;
    let res = arr.length;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] >= tar) {
            right = mid - 1;
            res = mid;
        } else {
            left = mid + 1;
        }
    }

    return res;
}
