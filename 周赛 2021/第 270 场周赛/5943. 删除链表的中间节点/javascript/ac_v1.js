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
var deleteMiddle = function(head) {
    let total = 0;
    let curNode = head;
    const tmpHead = new ListNode(-1, head);

    while(curNode) {
        total++;
        curNode = curNode.next;
    }

    let half = Math.floor(total / 2);
    let preNode = tmpHead;

    curNode = tmpHead.next;
    while(half) {
        preNode = preNode.next;
        curNode = curNode.next;
        half--;
    }
    preNode.next = curNode.next;
    curNode.next = null;

    return tmpHead.next;
};
