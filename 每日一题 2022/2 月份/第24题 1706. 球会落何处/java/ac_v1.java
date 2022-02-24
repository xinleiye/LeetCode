class Solution {
    public int[] findBall(int[][] grid) {
        int maxCol = grid[0].length;
        int[] res = new int[maxCol];

        Arrays.fill(res, -1);
        for (int i = 0; i < maxCol; i++) {
            int curCol = i;

            for (int[] row : grid) {
                int dir = row[curCol];

                curCol += dir;
                if (curCol < 0 || curCol == maxCol || row[curCol] != dir) {
                    curCol = -1;
                    break;
                }
            }
            res[i] = curCol;
        }

        return res;
    }
}
