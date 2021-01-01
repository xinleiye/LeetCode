/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let num1;
    let num2;
    let sum;
    let getListNum = (aHead => {
        let num = [];
        let node = aHead;

        while (aHead !== null) {
            num.push(aHead.val);
            aHead = aHead.next;
        }

        return num;
    });
    let addTwoNum = (num1, num2) => {
        let carry = 0;
        let res = [];
        let start1 = num1.length - 1;
        let start2 = num2.length - 1;

        for (; start1 >= 0 && start2 >= 0; start1--, start2--) {
            let sum = num1[start1] + num2[start2] + carry;

            res.unshift(sum % 10);
            carry = sum >= 10 ? 1 : 0;
        }

        if (start1 >= 0) {
            for (; start1 >= 0; start1--) {
                let sum = num1[start1] + carry;

                res.unshift(sum % 10);
                carry = sum >= 10 ? 1 : 0;
            }
        } else if (start2 >= 0) {
            for (; start2 >= 0; start2--) {
                let sum = num2[start2] + carry;

                res.unshift(sum % 10);
                carry = sum >= 10 ? 1 : 0;
            }
        }

        if (carry) {
            res.unshift(carry);
        }

        return res;
    };

    num1 = getListNum(l1);
    num2 = getListNum(l2);

    sum = addTwoNum(num1, num2);

    for (let i = sum.length - 1; i >= 0; i--) {
        let node = new ListNode(sum[i]);

        node.next = head;
        head = node;
    }

    return head;
};
