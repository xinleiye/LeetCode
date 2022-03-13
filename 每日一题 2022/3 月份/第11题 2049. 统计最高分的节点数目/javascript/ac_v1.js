/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
    let res = 0;
    let maxScore = 0;
    const root = new TreeNode(0);
    const nodeMap = new Map();
    const length = parents.length;
    const nodeScore = new Array(length).fill(1);
    const setChildNum = (node) => {
        if (!node) {
            return 0;
        }
        const left = setChildNum(node.left);
        const right = setChildNum(node.right);

        node.leftNodeNum = left;
        node.rightNodeNum = right;

        return left + right + 1;
    };
    const getScore = (node) => {
        if (!node) {
            return;
        }
        const nodeVal = node.val;
        const left = node.leftNodeNum ? node.leftNodeNum : 1;
        const right = node.rightNodeNum ? node.rightNodeNum : 1;
        const parent = length - 1 - node.leftNodeNum - node.rightNodeNum;

        nodeScore[nodeVal] = left * right * (parent ? parent : 1);
        maxScore = Math.max(maxScore, nodeScore[nodeVal]);
        getScore(node.left);
        getScore(node.right);
    };
    nodeMap.set(0, root);
    for (let i = 1; i < length; i++) {
        nodeMap.set(i, new TreeNode(i));
    }
    for (let i = 1; i < length; i++) {
        const node = nodeMap.get(i);
        const parentNode = nodeMap.get(parents[i]);

        if (parentNode.left === null) {
            parentNode.left = node;
        } else {
            parentNode.right = node;
        }
    }
    setChildNum(root);
    getScore(root);

    nodeScore.forEach(score => {
        if (score === maxScore) {
            res++;
        }
    });

    return res;
};

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.leftNodeNum = 0;
    this.right = null;
    this.rightNodeNum = 0;
}
