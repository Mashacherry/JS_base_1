// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
// operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            alert(func_summ(arg1, arg2));
            break;
        case "-":
            alert(func_subt(arg1, arg2));
            break;
        case "/":
            alert(func_div(arg1, arg2));
            break;
        case "*":
            alert(func_mult(arg1, arg2));
            break;
    }
}

var a = parseInt(prompt('Введите значение первого аргумента: '));
var b = parseInt(prompt('Введите значение второго аргумента: '));
var oper = prompt('Введите оператор: ');

mathOperation(a, b, oper);