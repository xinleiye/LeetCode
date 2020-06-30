#define INT_MAX ((int)0x7fffffff)
#define INT_MIN ((int)0x80000000)

int reverse(int x){
    int res = 0;

    while (x) {
        int mod10 = x % 10;

        if (res > INT_MAX / 10) {
            return 0;
        }
        if (res < INT_MIN / 10) {
            return 0;
        }
        res = res * 10 + mod10;
        x = x / 10;
    }

    return res;
}
