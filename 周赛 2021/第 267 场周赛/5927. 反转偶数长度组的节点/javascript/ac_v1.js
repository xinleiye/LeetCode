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
var reverseEvenLengthGroups = function(head) {
    let tarLen = 1;
    const flagHead = new ListNode(-1, head);
    let flagTail = flagHead;
    const reverseList = (listHead) => {
        const tmpHead = new ListNode();

        while (listHead) {
            const curNode = listHead;

            listHead = listHead.next;
            curNode.next = tmpHead.next;
            tmpHead.next = curNode;
        }

        return tmpHead.next;
    };

    while (head) {
        let curLen = 0;
        let len = tarLen;
        let tmpHead = new ListNode(-2, head);
        let preNode = tmpHead;

        while (curLen < tarLen && head) {
            preNode = head;
            head = head.next;
            curLen++;
        }
        preNode.next = null;
        if (curLen % 2 === 0) {
            flagTail.next = reverseList(tmpHead.next);
            flagTail = tmpHead.next;
        } else {
            flagTail.next = tmpHead.next;
            flagTail = preNode;
        }
        tarLen++;
    }

    return flagHead.next;
};
