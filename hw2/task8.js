// ### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 1) return val;
    else return power(val, pow - 1) * val;
}
var val = parseInt(prompt('введите число:'));
var pow = parseInt(prompt('введите степень:'));
alert(power(val, pow));