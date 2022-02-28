class Solution {
    public String optimalDivision(int[] nums) {
        int size = nums.length;

        if (size == 1) {
            return String.valueOf(nums[0]);
        }
        if (size == 2) {
            return String.valueOf(nums[0] + "/" + String.valueOf(nums[1]));
        }

        StringBuffer res = new StringBuffer();
        res.append(nums[0]);
        res.append("/(");
        res.append(nums[1]);
        for (int i = 2; i < size; i++) {
            res.append("/");
            res.append(nums[i]);
        }
        res.append(")");

        return res.toString();
    }
}
