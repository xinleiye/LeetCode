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
var sortList = function(head) {
    let flagNode = new ListNode(Number.MIN_SAFE_INTEGER);
    let listLength = getListLength(head);

    if (!head) {
        return head;
    }

    flagNode.next = head;
    for (let subLen = 1; subLen < listLength; subLen = subLen * 2) {
        let tailNode = flagNode;
        let currentNode = flagNode.next;

        while (currentNode) {
            let head1 = currentNode;
            let head2;
            let restList;

            for (let i = 1; i < subLen && currentNode.next; i++) {
                currentNode = currentNode.next;
            }

            head2 = currentNode.next;
            currentNode.next = null;
            currentNode = head2;
            for (let i = 1; i < subLen && currentNode && currentNode.next; i++) {
                currentNode = currentNode.next;
            }

            if (currentNode) {
                restList = currentNode.next;
                currentNode.next = null;
            }

            tailNode.next = merge(head1, head2);
            while (tailNode.next) {
                tailNode = tailNode.next;
            }

            currentNode = restList;
        }
    }

    return flagNode.next;
};

function getListLength (head) {
    let len = 0;
    let node = head;

    while (node) {
        len++;
        node = node.next;
    }

    return len;
}

function merge (head1, head2) {
    let head = new ListNode(0);
    let node1 = head1;
    let node2 = head2;
    let currentNode = head;

    while (node1 && node2) {
        if (node1.val < node2.val) {
            currentNode.next = node1;
            node1 = node1.next;
        } else {
            currentNode.next = node2;
            node2 = node2.next;
        }
        currentNode = currentNode.next;
    }

    if (node1) {
        currentNode.next = node1;
    } else {
        currentNode.next = node2;
    }

    return head.next;
}
