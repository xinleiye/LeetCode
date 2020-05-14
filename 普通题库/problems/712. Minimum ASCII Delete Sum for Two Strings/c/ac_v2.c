#define min(a, b) ((a) > (b) ? (a) : (b))

static int** calloc_matrix(int row, int col);
static void free_matrix(int **matrix, int row, int col);

int minimumDeleteSum(char * s1, char * s2){
    int res = 0;
    int len1 = strlen(s1);
    int len2 = strlen(s2);
    int **sum = calloc_matrix(len2 + 1, len1 + 1);
    int col, row;

    sum[0][0] = 0;
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

    res = sum[len2][len1];
    free_matrix(sum, len2 + 1, len1 + 1);

    return res;
}

static int** calloc_matrix(row, col) {
    int ** matrix = (int **)calloc(row, sizeof(int *));

    for (int i = 0; i < row; i++) {
        matrix[i] = (int *)calloc(col, sizeof(int));
    }

    return matrix;
}

static void free_matrix(int** matrix, int row, int col) {
    if (matrix == NULL) {
        return;
    }
    for (int i = 0; i < row; i++) {
        free(matrix[i]);
    }
    free(matrix);
}
