class Solution {
    public int[] platesBetweenCandles(String s, int[][] queries) {
        int total = s.length();
        int[] preSum = new int[total];

        for (int i = 0, sum = 0; i < total; i++) {
            if (s.charAt(i) == '*') {
                sum++;
            }
            preSum[i] = sum;
        }

        int[] left = new int[total];
        for (int i = 0, l = -1; i < total; i++) {
            if (s.charAt(i) == '|') {
                l = i;
            }
            left[i] = l;
        }

        int[] right = new int[total];
        for (int i = total - 1, r = -1; i >= 0; i--) {
            if (s.charAt(i) == '|') {
                r = i;
            }
            right[i] = r;
        }

        int[] res = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int[] q = queries[i];
            int l = right[q[0]];
            int r = left[q[1]];

            res[i] = l == -1 || r == -1 || l >= r ? 0 : preSum[r] - preSum[l];
        }

        return res;
    }
}
