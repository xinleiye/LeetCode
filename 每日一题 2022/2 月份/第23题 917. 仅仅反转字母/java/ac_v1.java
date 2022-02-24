class Solution {
    public String reverseOnlyLetters(String s) {
        char[] charArr = s.toCharArray();
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            while (left < right && !Character.isLetter(s.charAt(left))) {
                left++;
            }
            while (right > left && !Character.isLetter(s.charAt(right))) {
                right--;
            }
            swap(charArr, left, right);
            left++;
            right--;
        }

        return new String(charArr);
    }
    public void swap(char[] arr, int index1, int index2) {
        char temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}
