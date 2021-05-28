// homework 2021-05-26 Loops

/* Task #1
	Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for. 
	После выхода из цикла распечатайте полученную строку.
*/

	let dot = '.';
	let numberSign = '#';
	let dotNumberSign = dot + numberSign;

	for (i = 0; i < 4; i++) {
		dotNumberSign += (dot + numberSign); // почему, если заменить (dot + numberSign) на dotNumberSign, то выдаёт строку с 32-ю решётками?
			
			if (dotNumberSign == '.#.#.#.#.#') {
				dotNumberSign += dot;
			} 
	}

	alert(dotNumberSign);
	alert(dotNumberSign.length);

/* Task #2
	С клавиатуры вводятся цифры.
	В цикле просиходит проверка - если введено простое число, тогда происходит выход из цикла и число выводится на экране через alert.
*/
	// не понял как сделать условие (ЧИСЛО / 1) и (ЧИСЛО %2) == true == простое число
	let keyboardNum;

		for (i = 0; i < 1; i++) {
			keyboardNum = +prompt('Введите любые цифры', '');
				
				if (keyboardNum / 1 || keyboardNum / keyboardNum) {
					break;
				}
		}

	alert(keyboardNum);

/* Task #3
	
*/


/* Task #4. Level Up
	Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получился шахматный узор. 
	Для перевода строки используйте символ \n. 
	Код должен поддерживать лёгкое изменение размеров доски.
	
	Результат: .#.#.#.#.#.#
			   #.#.#.#.#.#.
			   .#.#.#.#.#.#
			   #.#.#.#.#.#.
			   .#.#.#.#.#.#
*/
	// НЕ ЗАКОНЧИЛ
	/*
		let dot = '.';
		let numSign = '#';
		let lineBreak = '\n';
		let str1 = '';
		let str2 = '';
		let str3 = '';
		let str4 = '';
		let str5 = '';

		// строка 1 
		for (i = 0; i != 5; i++){

			for (j = 0; j != 5; j++) {
				str1 += dot;
				str2 += numSign;

			}
		}

		alert(str1 + str2);
	*/

/* Task #5. Level Up
	Сформируйте строку в виде треугольника-ёлочки:
	
	Результат: .....#.....
			   ....###....
			   ...#####...
			   ..#######..
			   .#########.
			   ###########
*/
	// не знаю как в окне вывода alert сделать текст по центру
	let dot = '.';
	let numSign = '#';
	let lineBreak = '\n';
	let str1 = '';
	let str2 = '';
	let str3 = '';
	let str4 = '';
	let str5 = '';
	let str6 = '';

	// строка 1
	for (i = 0; i != 5; i++) { // в цикле задаём 5 итераций
		str1 += dot; // присваиваем в str1 точку и добавляем её 5 раз

		if (str1.length == 5) { // если длина строки 5 символов, то...
			str1 += numSign + str1 + lineBreak; // ...добавляем к str1 решётку, str1 с пятью точками и символ переноса строки
		}
	}

	// строка 2
	for (i = 0; i != 4; i++) { 
		str2 += dot; 

		if (str2.length == 4) { 
			str2 += numSign + numSign + numSign + str2 + lineBreak;
		}
	}

	// строка 3
	for (i = 0; i != 3; i++) { 
		str3 += dot; 

		if (str3.length == 3) { 
			str3 += numSign + numSign + numSign + numSign + numSign + str3 + lineBreak;
		}
	}

	// строка 4
	for (i = 0; i != 2; i++) { 
		str4 += dot; 

		if (str4.length == 2) { 
			str4 += numSign + numSign + numSign + numSign + numSign + numSign + numSign + str4 + lineBreak;
		}
	}

	// строка 5
    for (i = 0; i != 1; i++) { 
		str5 += dot; 

		if (str5.length == 1) { 
			str5 += numSign + numSign + numSign + numSign + numSign + numSign + numSign + numSign + numSign + str5 + lineBreak;
		}
	}

	// строка 6
	str6 += numSign + numSign + numSign + numSign + numSign + numSign + numSign + numSign + numSign + numSign + numSign; // добавляем последнюю строку с 11-ю решётками

	alert(str1 + str2 + str3 + str4 + str5 + str6);
