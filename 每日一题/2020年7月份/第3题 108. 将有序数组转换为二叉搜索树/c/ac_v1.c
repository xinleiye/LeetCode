/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
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
