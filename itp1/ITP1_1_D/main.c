//
//  main.c
//  ITP1_1_D
//
//
//

#include <stdio.h>

int main(int argc, const char * argv[]) {
    int seconds, hour_sec, minute_sec, h, m, s;
    scanf("%d", &seconds);
    minute_sec = 60;
    hour_sec = minute_sec * minute_sec;
    h = seconds / hour_sec;
    m = (seconds % hour_sec) / minute_sec;
    s = seconds % hour_sec % minute_sec;
    
    printf("%d:%d:%d\n", h, m, s);
    return 0;
}