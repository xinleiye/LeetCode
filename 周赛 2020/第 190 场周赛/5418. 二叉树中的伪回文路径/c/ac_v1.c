/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int isPalindromic (int *arr) {
    int total = 0;
    int odd = 0;

    for (int i = 0; i < 10; i++) {
        if (arr[i] % 2 == 1) {
            odd++;
        }
        total += arr[i];
    }

    if ((odd == 0 && total % 2 == 0) || (odd == 1 && total % 2 == 1)) {
        return 1;
    } else {
        return 0;
    }
};
void preOrder (struct TreeNode *node, int *arr, int *res) {
    if (!node) {
        return;
    }

    arr[node->val]++;
    if (!node->left && !node->right) {
        if (isPalindromic(arr) == 1) {
            *res = *res + 1;
        }
        arr[node->val]--;
        return;
    }
    preOrder(node->left, arr, res);
    preOrder(node->right, arr, res);
    arr[node->val]--;
}

int pseudoPalindromicPaths (struct TreeNode* root){
    int res = 0;
    int nodes[10] = {0};

    preOrder(root, nodes, &res);

    return res;
}
