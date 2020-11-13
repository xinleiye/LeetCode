/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let evenHead = new ListNode();
    let evenNode = evenHead;
    let nodeIndex = 1;
    let preNode = head;
    let node = head;

    if (!head) {
        return head;
    }
    while (node) {
        if (nodeIndex % 2 === 0) {
            // 当前为偶数节点，“删除”当前节点，并插入到偶数列表中
            evenNode.next = node;
            evenNode = evenNode.next;
            preNode.next = node.next;
            node = node.next;
            evenNode.next = null;
        } else {
            preNode = node;
            node = node.next;
        }
        nodeIndex++;
    }

    preNode.next = evenHead.next;

    return head;
};
