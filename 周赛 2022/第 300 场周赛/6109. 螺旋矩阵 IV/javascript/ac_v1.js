/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const res = new Array(m).fill(0).map(() => new Array(n).fill(-1));
    const layer = Math.min(Math.floor((m + 1) / 2), Math.floor((n + 1) / 2));

    for (let i = 0; i < layer && head; i++) {
        for (let col = i; col < (n - i) && head; col++) {
            res[i][col] = head.val;
            head = head.next;
        }
        for (let row = i + 1; row < (m - i - 1) && head; row ++) {
            res[row][n - i - 1] = head.val;
            head = head.next;
        }
        for (let col = n - i - 1; col >= i && head; col--) {
            res[m - i - 1][col] = head.val;
            head = head.next;
        }
        for (let row = m - i - 2; row >= (i + 1) && head; row --) {
            res[row][i] = head.val;
            head = head.next;
        }
    }
    
    return res;
};
