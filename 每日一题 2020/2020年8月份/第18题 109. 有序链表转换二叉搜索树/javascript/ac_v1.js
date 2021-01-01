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
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let listValArr = [];
    let createTree = (left, right) => {
        let node;
        let mid;

        if (left > right) {
            return null;
        }
        mid = Math.floor((left + right) / 2);
        node = new TreeNode(listValArr[mid]);
        node.left = createTree(left, mid - 1);
        node.right = createTree(mid + 1, right);

        return node;
    };

    while (head) {
        listValArr.push(head.val);
        head = head.next;
    }

    return createTree(0, listValArr.length - 1);
};
