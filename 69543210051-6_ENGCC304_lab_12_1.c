#include <stdio.h>

void showSign(int n) {
    if (n > 0) {
        printf("Positive\n");
    } else if (n < 0) {
        printf("Negative\n");
    } else {
        printf("Zero\n");
    }
}

int main() {
    int n;
    scanf("%d", &n);
    showSign(n);
    return 0;
}