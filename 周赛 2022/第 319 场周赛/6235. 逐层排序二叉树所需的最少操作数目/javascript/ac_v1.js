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
var minimumOperations = function(root) {
    let res = 0;
    let nodeQueue = [root];

    while (nodeQueue.length) {
        const newNodeQueue = [];
        const values = [];

        for (const node of nodeQueue) {
            values.push(node.val);
            if (node.left) {
                newNodeQueue.push(node.left);
            }
            if (node.right) {
                newNodeQueue.push(node.right);
            }
        }
        res += getMinOP(values);
        nodeQueue = newNodeQueue;
    }

    return res;
};

function getMinOP (arr) {
    let op = 0;
    const length = arr.length;
    const sortedIndex = new Array(length);
    const visited = new Array(length).fill(false);

    for (let i = 0; i < length; i++) {
        sortedIndex[i] = i;
    }
    sortedIndex.sort((i1, i2) => arr[i1] - arr[i2]);
    for (let i = 0; i < length; i++) {
        let next = sortedIndex[i];

        if (!visited[next]) {
            let len = 0;

            while (!visited[next]) {
                visited[next] = true;
                next = sortedIndex[next];
                len++;
            }
            op += len - 1;
        }
    }

    return op;
}
