class Solution {
    int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    public int[][] highestPeak(int[][] isWater) {
        int maxRow = isWater.length;
        int maxCol = isWater[0].length;
        int[][] res = new int[maxRow][maxCol];
        Queue<int[]> queue = new ArrayDeque<int[]>();

        for (int i = 0; i < maxRow; i++) {
            Arrays.fill(res[i], -1);
        }
        for (int i = 0; i < maxRow; i++) {
            for (int j = 0; j < maxCol; j++) {
                if (isWater[i][j] == 1) {
                    res[i][j] = 0;
                    queue.offer(new int[]{i, j});
                }
            }
        }
        while (!queue.isEmpty()) {
            int[] pos = queue.poll();

            for (int[] dir : dirs) {
                int row = pos[0] + dir[0];
                int col = pos[1] + dir[1];

                if (row >= 0 && row < maxRow && col >= 0 && col < maxCol && res[row][col] == -1) {
                    res[row][col] = res[pos[0]][pos[1]] + 1;
                    queue.offer(new int[]{row, col});
                }
            }
        }

        return res;
    }
}
