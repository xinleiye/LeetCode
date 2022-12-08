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
    const sortedVal = [];
    const inOrder = (node, arr) => {
        if (!node) {
            return;
        }
        inOrder(node.left, arr);
        arr.push(node.val);
        inOrder(node.right, arr);
    };
    const binarySearch = (arr, tar) => {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
            const mid = left + ((right - left) >>> 1);

            if (arr[mid] > tar) {
                right = mid;
            } else if (arr[mid] < tar) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        
        return left;
    };

    inOrder(root, sortedVal);
    for (const q of queries) {
        const pos = binarySearch(sortedVal, q);
        const val = sortedVal[pos];

        if (val === q) {
            res.push([val, val]);
        } else if (val > q) {
            if (pos === 0) {
                res.push([-1, val]);
            } else {
                res.push([sortedVal[pos - 1], val]);
            }
        } else {
            if (pos === sortedVal.length - 1) {
                res.push([val, -1]);
            } else {
                res.push([val, sortedVal[pos + 1]]);
            }
        }
    }

    return res;
};
