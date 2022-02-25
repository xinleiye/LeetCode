class ComplexNumber {
    int real;
    int imaginary;

    public ComplexNumber(String num) {
        String[] c = num.split("\\+|i");

        this.real = Integer.parseInt(c[0]);
        this.imaginary = Integer.parseInt(c[1]);
    }
}
class Solution {
    public String complexNumberMultiply(String num1, String num2) {
        ComplexNumber c1 = new ComplexNumber(num1);
        ComplexNumber c2 = new ComplexNumber(num2);

        return String.format("%d+%di", c1.real * c2.real - c1.imaginary * c2.imaginary, c1.real * c2.imaginary + c1.imaginary * c2.real);
    }
}
