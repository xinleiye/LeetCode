class Solution {
    public String convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }
        boolean negative = false;
        StringBuffer res = new StringBuffer();
        if (num < 0) {
            negative = true;
            num = -num;
        }
        while (num > 0) {
            res.append(num % 7);
            num /= 7;
        }
        if (negative) {
            res.append("-");
        }

        return res.reverse().toString();
    }
}
