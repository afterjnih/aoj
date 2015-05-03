//
//  main.c
//  ITP1_2_A
//
//
//

#include <stdio.h>
#include <math.h>

int main(int argc, const char * argv[]) {
    int a, b;
    scanf("%d%d", &a, &b);
    switch(signbit(a - b)) {
        case 0:
            if(a == b){
                printf("a == b\n");
            }else{
                printf("a > b\n");
            }
            break;
         default:
            printf("a < b\n");
    }
    return 0;
}