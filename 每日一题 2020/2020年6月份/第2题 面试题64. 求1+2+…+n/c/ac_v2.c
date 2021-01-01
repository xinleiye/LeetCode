int sumNums(int n){
    int sum = 0;

    sum += getSum(n + 1, n, &sum);

    return sum >> 1;
}
int getSum (int base, int multi, int *sum) {
    int res = 0;

    multi && (res = getSum(base, multi >> 1, sum));
    *sum = (*sum + res) << 1;

    return (multi & 1) * base;
}
