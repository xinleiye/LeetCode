long long maximumOr(int* nums, int numsSize, int k){
    long long res = 0;
    long long postOR[numsSize + 1];
    long long preOR = 0;

    memset(postOR, 0, sizeof(long long) * (numsSize + 1));
    for (int i = numsSize - 1; i >= 0; i--) {
        postOR[i] = nums[i] | postOR[i + 1];
    }
    for (int i = 0; i < numsSize; i++) {
        long long curRes = preOR | ((long long)nums[i] << k) | postOR[i + 1];

        res =  curRes > res ? curRes : res;
        preOR |= nums[i];
    }

    return res;
}
