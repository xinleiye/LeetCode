/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let inDegree = new Array(n).fill(0);
    let inDegreeSum = 0;

    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            inDegree[leftChild[i]]++;
        }
        if (rightChild[i] !== -1) {
            inDegree[rightChild[i]]++;
        }
    }

    if (inDegree[0] !== 0) {
        return false;
    }

    for (let i = 0; i < n; i++) {
        if (inDegree[i] > 1) {
            return false;
        }
        inDegreeSum += inDegree[i];
    };

    if (inDegreeSum !== n - 1) {
        return false;
    }

    return true;
};
