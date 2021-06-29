// homework 2021-06-04 Functions

/* Task #1
	Создайте функцию p и a, которые будут служить короткими именами для prompt и alert, 
	то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение 
	в стандартном модальном окне.
	Напишите функцию d, которая будет служить коротким именем для debugger, запускать процесс отладки.
	Используя эти псевдонимы получите значение из prompt и отобразите в alert.
	Процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.
*/
	let p = function () {
		return prompt('Введите любое сообщение.', '');
	};

	p();

	let a = function () {
		return alert();
	};

	a(p());


/* Task #2
	Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), 
	которая сравнивает два числа и возвращает большее.
*/
	const max = (number1, number2) => {
		if (number1 > number2) {
			return number1;
		} else return number2;
	};

	console.log(max(1, 29));


/* Task #3
	Используя синтаксис ES5, напишите функцию-аналог Math.min(). 
	Функция принимает любое количество чисел и возвращает меньшее из них.
*/
	const min = function min() {
		let minNumber = 0;
		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] < minNumber) {
				minNumber = arguments[i];
			}
		}
		return minNumber;
	};

	min(1, 0, 21, 13, 987, -17, -99, -1098);


/* Task #4
	Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.
*/
		const findLongestWord = function findLongestWord(str1) {
			let splitStr = str1.split(' ');
			let longestWord = 0;

			for (let i = 0; i < splitStr.length; i++) {
				if (splitStr[i].length > longestWord) {
					longestWord = splitStr[i].length;
					console.log(splitStr[i]);
				}
			}
			return longestWord;
		}

		findLongestWord('Аргентина манит негра');


/* Task #5
	Напишите функцию, которая в строке, состоящей из чисел, разделённых пробелом, находит максимальное и минимальное и возвращает их.
*/
	const highAndLow = function highAndLow(str) {
		let strSplit = str.split(' ');
		let arrayOfNum = [];
		let maxNum = 0;
		let minNum = 0;

		// console.log(strSplit);

		for (let i = 0; i < strSplit.length; i++) {
			if (typeof strSplit[i] !== 'number') {
				strSplit[i] = Number(strSplit[i]);
				arrayOfNum.push(strSplit[i]);
   			}
   			// console.log(arrayOfNum);
		}

		for (let k = 0; k < arrayOfNum.length; k++) {
			if (arrayOfNum[k] > maxNum) {
				maxNum = arrayOfNum[k];
			}
		}

		for (let p = 0; p < arrayOfNum.length; p++) {
			if (arrayOfNum[p] < minNum) {
				minNum = arrayOfNum[p];
			}
		}

		/*return maxNum;
		return minNum;*/
		console.log('Наибольшее число: ' + maxNum);
		console.log('Наименьшее число: ' + minNum);

	}

	let result = highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
	console.log(result);