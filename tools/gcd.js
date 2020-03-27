/**
 * 辗转相除法，求 num1 与 num2 的最大公约数。
 * @param {较大的数} num1 
 * @param {较小的数} num2 
 * 若 num2 大于 num1，程序会自动交换
 */
function gcd (num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
