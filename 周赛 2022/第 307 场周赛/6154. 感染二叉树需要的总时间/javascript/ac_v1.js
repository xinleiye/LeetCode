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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let times = 0;
    const edgeMap = new Map();
    const dfsSearch = (node, pNode) => {
        if (!node) {
            return;
        }
        const nodes = [];
        
        if (pNode) {
            nodes.push(pNode.val);
        }
        if (node.left) {
            nodes.push(node.left.val);
        }
        if (node.right) {
            nodes.push(node.right.val);
        }
        edgeMap.set(node.val, nodes);
        dfsSearch(node.left, node);
        dfsSearch(node.right, node);
    };
    const visitedSet = new Set();
    let stack = [start];

    dfsSearch(root, null);
    while (stack.length) {
        const newStack = [];
        
        for (const s of stack) {
            const nexts = edgeMap.get(s);

            visitedSet.add(s);
            for (const n of nexts) {
                if (!visitedSet.has(n)) {
                    newStack.push(n);
                }
            }
        }
        stack = newStack;
        times++;
    }    

    return times - 1;
};
