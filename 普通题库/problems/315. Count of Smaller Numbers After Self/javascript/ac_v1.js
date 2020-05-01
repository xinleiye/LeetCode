/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let root;
    let pos;
    let res = [];

    function Node (val) {
        this.val = val;
        this.count = 0;
        this.dup = 1;
        this.left = null;
        this.right = null;
    }

    function insert (pNode, val, preCount) {
        if (!pNode) {
            res[pos] = preCount;
            pNode = new Node(val);
        } else if (pNode.val === val) {
            pNode.dup++;
            res[pos] = pNode.count + preCount;
        } else if (pNode.val > val) {
            pNode.count++;
            pNode.left = insert(pNode.left, val, preCount);
        } else {
            pNode.right = insert(pNode.right, val, pNode.count + pNode.dup + preCount);
        }
        return pNode;
    }

    for (pos = nums.length - 1; pos >= 0; pos--) {
        root = insert(root, nums[pos], 0);
    }
    return res;
};
