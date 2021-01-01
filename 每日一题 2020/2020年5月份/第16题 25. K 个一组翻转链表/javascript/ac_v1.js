/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let resNode = new ListNode(0);
    let preTail = resNode;

    resNode.next = head;
    while (head) {
        let tail = preTail;

        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (tail === null) {
                return resNode.next;
            }
        }

        [head, tail] = reverseList(head, tail);

        preTail.next = head;
        head = tail.next;
        preTail = tail;
    }

    return resNode.next;
};

function reverseList (head, tail) {
    let pre = tail.next;
    let cur = head;

    while (pre !== tail) {
        let next = cur.next;

        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return [tail, head];
}
