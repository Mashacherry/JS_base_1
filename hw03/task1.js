// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var i = 2;

while (i <= 100) {
    var j = Math.sqrt(i);
    var k = 2;
    var isprime = true;
    while (k <= j) {
        if (i % k == 0) {
            i++;
            isprime = false;
            break;
        }
        k++;
    }
    if (isprime) {
        console.log(i);
        i++;
    }

}