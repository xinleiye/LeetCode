int minimumDeleteSum(char * s1, char * s2){
    int res = 0;
    int len1 = strlen(s1);
    int len2 = strlen(s2);
    int sum[len2 + 1][len1 + 1];
    int col, row;

    memset(sum, 0, sizeof(int) * (len1 + 1) * (len2 + 1));
    for (col = 0; col < len1; col++) {
        sum[0][col + 1] = sum[0][col] + s1[col];
    }
    for (row = 0; row < len2; row++) {
        sum[row + 1][0] = sum[row][0] + s2[row];
    }
    for (col = 0; col < len1; col++) {
        for (row = 0; row < len2; row++) {
            if (s1[col] == s2[row]) {
                sum[row + 1][col + 1] = sum[row][col];
            } else {
                sum[row + 1][col + 1] = sum[row + 1][col] + s1[col] > sum[row][col + 1] + s2[row] ? sum[row][col + 1] + s2[row] : sum[row + 1][col] + s1[col];
            }
        }
    }

    return sum[len2][len1];
}
