//
//  main.c
//  ITP1_1_C
//
//
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int length, width;
    char input[100];
    fgets(input, sizeof(input), stdin);
    length = atoi(strtok(input, " "));
    width = atoi(strtok(NULL, " "));
    printf("%d %d\n", length * width, length * 2 + width * 2);
    return 0;
}
