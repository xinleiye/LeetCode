function isPalindrome(s: string): boolean {
    let left: number = 0;
    let right: number = s.length - 1;
    let str: string = s.toLowerCase();
    let isChar = (a: string): boolean => {
        let code: number = a.charCodeAt(0);

        if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 48 && code <= 57) {
            return true;
        }

        return false;
    };

    while (left < right) {
        if (!isChar(str[left])) {
            left++;
            continue;
        }
        if (!isChar(str[right])) {
            right--;
            continue;
        }
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }

    return true;
};
