/*Task 1
	Найти и исправить ошибку.
*/
	
	'use strict';
	var x = prompt('Введите X', '1'), //Необходима была запятая
		y = prompt('Введите Y', '1');

	alert( 'Сумма: ' + x + y);


/*Task 2
	Создать ТРИ переменные. 
	Первая со случайным целочисленным значением. 
	Вторая равна первой увеличенной в три раза. 
	Третья равна сумме двух первых. 
	Распечатать все три.
*/
		
		var x = Math.random() * 10, //Первая переменная, случайное целочисленно значение
	    x = Math.round(x), //Округляем. Можно через Math.ceil
		y = x * 3, //Вторая переменная равна первой увеличенной в 3 раза
		z= x + y; //Сумма двух первых переменных

	//console.log(x, y, z); //Вариант с выводом трёх переменных в консоли. Разкомментировать для активации
    alert(x +' ' + y +' ' + z); //Вариант с одновременным выводом трёх переменных в alert


/*Task 3 
	Создать переменные для имени и фамилии. Записать в них значение из модального окна prompt. 
	Вывести на экран приветствие с конкатенацией и экранированием символов. 
	Имя и фамилию вывести заглавными буквами.
*/
//Без экранирования слов. Узнать подробней.
	
	var firstName = prompt('First Name: ', 'John'), //Переменная для имени, значение получаем из окна prompt
    	lastName = prompt('Last Name: ', 'Doe'); //Переменная для фамилии, значение получаем из окна prompt

alert("What's up " + firstName.toUpperCase() + ' ' + lastName.toUpperCase()); //Выводим приветствие с именем и фамилией заглавными буквами


/*Task 4
	Создать переменные x и y для хранения числа. Значения полчить из prompt. 
	Рассчитать произведение, частное, разность и сумму этих значений. 
	Результат вывести последовательно в модальное окно. 
	Процесс вычисления посмотреть в debugger.
*/

	var x = +prompt('Number 1', x), //Переменная x, значение из prompt, знак + перед prompt переводит строковое значение из него в числовое
		y = +prompt('Number 2', y), //Переменная y, значение из prompt, знак + перед prompt переводит строковое значение из него в числовое
		multiply = x * y, //Умножаем
		chastnoe = x / y, //Частное
		minus = x - y, //Разница
		sum = x + y; //Сумма

	alert('Умножаем: ' + multiply); //Выводим результат последовательно
	alert('Частное: ' + chastnoe);
	alert('Разница: ' + minus);
	alert('Сумма: ' + sum);


/*Task 5
	Космический корабль летит с Земли на Луну. 
	Расстояние 384 400 км. Скорость корабля задаётся из prompt. 
	Рассчитать время полёта до Луны. Использовать осмысленные названия переменных.
*/

var dstncEarthMoon = 384400, //Расстояние от Земли до Луны
    speedSpaceShip = prompt('Задайте желаемую скорость корабля в км/ч. \nЕсли нужно отправить космический корабль в межпланетное путешествие, то скорость должна быть 40к км/ч!', speedSpaceShip), //Скорость корабля, задаётся в prompt
    speedSpaceShip = Number(speedSpaceShip), //Приводим полученное строковое значение из prompt в числовое
    timeForTrip = dstncEarthMoon / speedSpaceShip; //Время за которое долетит корабль

alert('Космический корабль доберётся до Луны, при скорости ' + speedSpaceShip + ' ' + 'км/ч,' + ' ' + 'через ' + Math.ceil(timeForTrip) + ' ' + 'часов. Приятного полёта!');
//!Найти и добавить команду цифренных обозначений для стран чтобы выводить не 1000, а 1 000. Так удобней читать количество нулей.


/*Task 6
	Определить без оператора сравнения является ли введённое целое число нечётным (true/false). 
	Результат вывести в alert. 
*/

	var x = +prompt('Введите число: ', x), //Получаем число от пользователя строкой из prompt и приводим знаком + к числу
		y = x % 2; 
	alert('Если число чётное - false, нечётное - true: ' + Boolean(y));


/*Task 7
	Является ли введённое значение числом? true/false. Результат в alert();
*/

	var entValue = +prompt('Введите что угодно и узнайте число ли это?', ''); //Получаем строку и переводим в число
    var typeOfData = Boolean(entValue); //Все числа, в том числе 1e6 (миллион), будут true, а строки и 0 будут false
	alert('true - число \nfalse - строка и 0 \nРезультат: ' + typeOfData); //Используя перенос строки формируем удобно читаемый формат


/*Task 8
	Написать конвертатор единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт).
	Вводимое значение в мегабайтах через prompt. 
	Результат в alert. Использовать константы там где логически оправдано.
*/
	var enterValue = +prompt('Введите число в МБ для конвертации: ', enterValue),
	 	B = 8, //Через const выводит SyntaxError: Unexpected token 'const'
	 	KB = MB = GB = 1024, //Через const выводит SyntaxError: Unexpected token 'const'
		convertMbToB = (enterValue * KB) * B,
		convertMbToKb = enterValue * KB,
		convertMbToGb = enterValue / GB;
	alert(enterValue + ' МБ будет ' + convertMbToB + ' Байт, ' + convertMbToKb + ' КБ, ' + convertMbToGb + ' ГБ');


/*Task 9
	У Чжуан-Цзы было N яблок. Цзен-Цзы съел несколько. 
	Чжуан-Цзы обвинил Цзен-Цзы что он съел все яблоки. 
	Записать повествование в перемемнных и выражениях читая значения из prompt. 
	Не использовать оператор сравнения показать говорит Цзен-Цзы правду или ложь.
*/

var zhuanCzi = prompt('У Чжуан-Цзы было N яблок ', 'Введите количество яблок'), // Вводим кол-во яблок изначально, возвращается строка.
	czenCzi = prompt('Цзен-Цзы съел несколько', 'Введите сколько яблок съедено'), // Вводим кол-во съеденных яблок, возвращается строка.
    goneApples = zhuanCzi - czenCzi; /* Вычитаем от всех яблок съеденные. Определяем сколько яблок отсалось. Всё что больше 0 будет true, значит не все яблоки съедены, меньше 0 будет false - все яблоки съедены. 
    									Интересно что задав съеденных яблок больше чем их есть, то будет true */
alert('Чжуан-Цзы обвинил Цзен-Цзы что он съел все яблоки. \nЕсли результат false - виновен, если true - не виновен. \nРезультат: ' + Boolean(goneApples));
	
/*Task 10
	На сайте три колонки разной высоты. 
	Значения задаются в prompt в формате px. 
	Функцией библиотеки Math найти наибольшее значение из трёх и показать его. 
*/
	var a = +prompt('Высота 1-й колонки, в px: ', a), //Задаём через prompt числовое значение приведя к числу через знак + перед prompt.
		b = +prompt('Высота 2-й колонки, в px: ', b),
		c = +prompt('Высота 3-й колонки, в px: ', c);

	alert('Наибольшее значение: ' + Math.max(a, b, c) + ' px'); //Выподим наибольшее значение из трёх через функцию Math.max для нахождения наибольшего числа из заданных.
		 