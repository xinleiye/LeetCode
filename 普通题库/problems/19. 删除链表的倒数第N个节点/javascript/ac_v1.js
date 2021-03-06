function isPalindrome(x: number): boolean {
    let num = 0;

    if (x < 0 || (x % 10 === 0 && x > 0)) {
        return false;
    }

    while (num < x) {
        num = num * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === num || x === Math.floor(num / 10);
};
