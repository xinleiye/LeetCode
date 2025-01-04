/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    let res = false;
    const dfsSearch = (treeNode, linkNode) => {
        if (!linkNode) {
            return true;
        }
        if (!treeNode) {
            return false;
        }
        if (treeNode.val === linkNode.val) {
            return dfsSearch(treeNode.left, linkNode.next) || dfsSearch(treeNode.right, linkNode.next);
        }

        return false;
    };
    const stack = [root];

    while (stack.length) {
        const node = stack.shift();

        if (node.val === head.val) {
            res = dfsSearch(node, head);
        }
        if (res) {
            break;
        }
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }

    return res;
};
