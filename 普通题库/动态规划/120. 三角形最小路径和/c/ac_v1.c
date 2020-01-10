int minimumTotal(int** triangle, int triangleSize, int* triangleColSize) {
    int res = 0;
    int *pathSum = NULL;

    if ((triangle == NULL) || (triangleSize < 1) || (triangleColSize == NULL)) {
        return 0;
    }

    pathSum = (int *)malloc(sizeof(int) * triangleColSize[triangleSize - 1]);
    memcpy(pathSum, triangle[triangleSize - 1], sizeof(int) * triangleColSize[triangleSize - 1]);
    for (int i = triangleSize - 2; i >= 0; i--) {
        for (int j = 0, len = *triangleColSize + i; j < len; j++) {
            pathSum[j] = triangle[i][j] + (pathSum[j] > pathSum[j + 1] ? pathSum[j + 1] : pathSum[j]);
        }
    }

    res = pathSum[0];
    free(pathSum);

    return res;
}
