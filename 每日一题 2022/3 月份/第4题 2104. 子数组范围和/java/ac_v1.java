class Solution {
    public long subArrayRanges(int[] nums) {
        int total = nums.length;
        long res = 0;

        for (int i = 0; i < total; i++) {
            int min = Integer.MAX_VALUE;
            int max = Integer.MIN_VALUE;

            for (int j = i; j < total; j++) {
                min = Math.min(min, nums[j]);
                max = Math.max(max, nums[j]);
                res += (max - min);
            }
        }

        return res;
    }
}
