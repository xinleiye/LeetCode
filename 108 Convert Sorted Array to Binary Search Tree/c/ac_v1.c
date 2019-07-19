/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 * Runtime: 12 ms, faster than 81.69% of C online submissions for Convert Sorted Array to Binary Search Tree.
 * Memory Usage: 19.2 MB, less than 68.49% of C online submissions for Convert Sorted Array to Binary Search Tree.
 */

struct TreeNode* bst (int *nums, int start, int end) {
    int mid;
    struct TreeNode *node;
    
    if (start >= end) {
        return (struct TreeNode *)NULL;
    }
    mid = (start + end) / 2;
    node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
    node->val = nums[mid];
    node->left = bst(nums, start, mid);
    node->right = bst(nums, mid + 1, end);
    
    return node;
}

struct TreeNode* sortedArrayToBST(int* nums, int numsSize){
    if (numsSize <= 0) {
        return (struct TreeNode *)NULL;
    }

    return bst(nums, 0, numsSize);
}
