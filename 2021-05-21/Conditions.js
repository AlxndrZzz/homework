// homework 2021-05-21 Conditions

/* Task #1
	Три переменные. Найти наименьшее. Вывести на экран.
*/
	let x = Math.random(x), // Создаём переменные с рандомным числом
		y = Math.random(y),
		z = Math.random(z);

	//Находим наименьшее число из трёх через составное условие if - else
	if (x < y) { // Если (x < y) истина, то проверить (x < z)
		if (x < z) {alert('Наименьшее число X: ' + Math.trunc(x * 10) + '\nY = ' + Math.trunc(y * 10) + '\nZ = ' + Math.trunc(z * 10))} // Eсли (x < z) истина, то вывести окно через alert();
	} else if (y < x) { // Иначе если (y < x) истина, то проверить (y < z)
		if (y < z) {alert('Наименьшее число Y: ' + Math.trunc(y * 10) + '\nX = ' + Math.trunc(x * 10) + '\nZ = ' + Math.trunc(z * 10))} // Eсли (y < z) истина, то вывести окно через alert();
	} else if (z < x) { // Иначе если (z < x) истина, то проверить (z < x)
		if (z < x) {alert('Наименьшее число Z: ' + Math.trunc(z * 10) + '\nX = ' + Math.trunc(x * 10) + '\nY = ' + Math.trunc(y * 10))} // Eсли (z < x) истина, то вывести окно через alert();
	}

/* Task #2
	В диалоговом окне задаётся скорость улитки. 
	Проверить двигается улитка вперёд, назад или остаётся на месте (скорость положительная, отрицательная или ноль). 
	Вывести на экран.
*/
	let speedOfSnail = +prompt('Задайте скорость улитки, в см/мин: ', ''); // Задаём скорость в см/мин и переводим из строки в число через +

		// Сравниваем заданную скоростьс 0 для определения куда двигается улитка
		if (speedOfSnail > 0) { // Если скорость больше 0 значит движение вперёд и выводится на экран что улитка двигается вперёд
			alert('Улитка двигается ВПЕРЁД со скоростью ' + speedOfSnail + ' см/мин');
		} else if (speedOfSnail == 0) { // Иначе если скорость равна 0 выводится на экран что улитка не двигается
			alert('Улитка не двигается и стоит на месте');
		} else if (speedOfSnail < 0) { // Иначе если скорость меньше 0 выводится на экран что улитка двигается назад
			alert('Улитка двигается НАЗАД со скоростью ' + speedOfSnail + ' см/мин');
		}

/* Task #3
	Задать из prompt имя пользователя. Вывести на экран приветствие. 
	Учесть что пользователь может не ввести ничего или нажать на отмена.
*/
	let userName = prompt('Как Ваше имя?', ''); // Получаем имя из prompt строкой
		
		// Проверяем ввёл ли пользователь значение, нажал 'Отмена' или оставил пустую строку
		if (userName == false) { // Если пользователь не введёт ничего (в том числе пустую строку, ноль) это вернёт из prompt значение false и выведет на экран 'Не хочешь представиться - как хочешь.'
			alert('Не хочешь представиться - как хочешь.');
		} else if (userName == null) { // Иначе если пользователь нажмёт 'Отмена', то вернётся значение null, и выдаст на экран 'Охрана! Отмена!'
            alert('Охрана! Отмена!');
        } else { // Если пользователь введёт строковое значение (также число кроме ноль), то выдаст приветствие
			alert('Здравствуй ' + userName + '!');
		} 

/* Task #4
	Задать из prompt количество денег у меня и моего друга. Определить сумму денег. 
	Через условный оператор определить на что хватит денег - изучать английский на Мальте или выпить пива.
	Вывести на экран через alert();
*/
	const priceTicketMaltaUah = 15000;
	const priceBeerLiterUah = 40;

	let myMoney = +prompt('Введите сколько у Вас гривен:', '');
	let friendsMoney = +prompt('Введите сколько у Вашего друга гривен:', '');
	let sumMoney = myMoney + friendsMoney;

	if (sumMoney >= priceTicketMaltaUah) {
		alert('Бабки не вопрос! Всего у нас: ' + sumMoney.toLocaleString('ru') + ' гривен' + '\nЛетим на Мальту учить английский! \nБилет на Мальту стоит ' + priceTicketMaltaUah.toLocaleString('ru') + ' гривен');
	} else {
		alert('Всего у нас: ' + sumMoney + '\nМожем позволить себе пивасик за ' + priceBeerLiterUah + ' грн/л' + '\nВозьмём ' + (sumMoney / priceBeerLiterUah) + ' литров пива вместо Мальты за ' + priceTicketMaltaUah.toLocaleString('ru') + ' гривен')
	}

/* Task #5
	Подходящих маршруток три: 7, 225, 255
	Номер подъехавшей маршрутки через prompt.
	Если подходящая, то ехать домой. Иначе ожидать следующую.
*/

	const rightBus7 = 7;
	const rightBus225 = 225;
	const rightBus255 = 255;

	let arrivedBus = +prompt('Введите номер подъехавшей маршрутки', '');
	
	if (arrivedBus == rightBus7) {
		alert('Быстрей! Это ТВОЯ маршрутка домой! Садись в неё!');
	} else if (arrivedBus == rightBus225) {
		alert('Быстрей! Это ТВОЯ маршрутка домой! Садись в неё!');
	} else if (arrivedBus == rightBus255) {
		alert('Быстрей! Это ТВОЯ маршрутка домой! Садись в неё!');
	} else {
		alert('Жди следующую. Эта не подходит.');
	}

/* Task #6
	В переменной day текущий день.
	Если это не суббота и не воскресенье, то вывести в alert сообщение о необходимости идти на работу.
*/
	let wknd = new Date(); // Использую метод объекта Date для извлечения инфо по локальному времени и календарю пользователя.
	let day = wknd.getDay(); // Вернёт число дня, 0 это Воскресенье.
	let nameOfDay = day; // Переменная для присваивания строкового имени дня, через блок кода со switch.

	// Блок кода с switch для создания строкового имени по числу дня.
	switch(nameOfDay) {
		case 0 : nameOfDay = 'Воскресенье'; break;
		case 1 : nameOfDay = 'Понедельник'; break;
		case 2 : nameOfDay = 'Вторник'; break;
		case 3 : nameOfDay = 'Среда'; break;
		case 4 : nameOfDay = 'Четверг'; break;
		case 5 : nameOfDay = 'Пятница'; break;
		case 6 : nameOfDay = 'Суббота'; break;
	}

	// Блок кода для сравнения текущего дня.
	if (day == 6 || day == 0) { //Если day будет 6 ИЛИ 0, то выведет 
		alert('Отдыхаем, сегодня - ' + nameOfDay);
	} else {
		alert('Необходимо идти на работу! Сегодня будний день - ' + nameOfDay);
	}

/*Task #7
	Калькулятор обмена валюты USD-UAH.
	Первый prompt задаёт тип операции USD-UAH, UAH-USD (к регистру не чувствителен).
	Второй prompt - сумма конвертации. Рассчитать результат конвертации через switch.
	Результат вывести через alert();
*/
	let typeOfExchange = prompt('Укажите тип конвертации: USD-UAH или UAH-USD', ''); // Запрашиваем пользователя ввести тип конвертации, с какой на какую валюту.
	let typeOfMoney = typeOfExchange.toUpperCase(); // Приводим полученное значение из typeOfExchange к верхнему регистру методом toUpperCase чтобы можно было вводить ккак большими так и маленькими буквами.
	let resultOfExchange = typeOfMoney; // Переменная со значением из prompt большими буквами, на случай если пользователь введёт маленькими.
	let sumOfExchange; // Переменная для запроса ввести через prompt сумму обмена в выбранной ранее валюте.

	const usdUah = 27.75; // Курс доллара к гривне, выбран константой т.к. не изменится в условиях данной задачи.

	switch(resultOfExchange) { // В зависимости от пары введенных валют зависит содержимое окна prompt при запросе ввести сумму в указанной валюте.
		case 'USD-UAH' : sumOfExchange = +prompt('Укажите сумму конвертации в долларах по курсу: ' + usdUah, ''); break; // Еслм resultOfExchange == USD-UAH, то выдаст: Укажите сумму конвертации в USD
		case 'UAH-USD' : sumOfExchange = +prompt('Укажите сумму конвертации в гривнах по курсу' + usdUah, ''); break; // Еслм resultOfExchange == UAH-USD, то выдаст: Укажите сумму конвертации в UAH
	}


	switch(resultOfExchange) { // Блок кода конвертации путём умножения суммы на курс доллара и наоборот деления суммы на курс доллара.
		case 'USD-UAH' : resultOfExchange = sumOfExchange * usdUah; break; // USD-UAH
		case 'UAH-USD' : resultOfExchange = sumOfExchange / usdUah; break; // UAH-USD
	}

	if (typeOfMoney == 'USD-UAH') { // Вывод сообщения через alert(); с суммой полученной после конвертации.
		alert('Ваши: ' + Math.trunc(resultOfExchange).toLocaleString('ru') + ' UAH'); // Разделяем нули в числе через метода toLocaleString('ru') для удобства чтения чисел, например: 1 000.
	} else {
		alert('Ваши: ' + Math.trunc(resultOfExchange).toLocaleString('ru') + ' USD'); // Разделяем нули в числе через метода toLocaleString('ru') для удобства чтения чисел, например: 1 000.
	}
	/* [ ] Отобразить обменный курс при вводе суммы обмена.
	   [ ] Отображать разделение нулей в числе через tolocaleString('ru')
	*/

/* Task #8
	Есть let month = текущий месяц.
	Определить в какую пору года входит этот месяц (зима, лето, весна, осень).
	Вывести результат.
*/
	let twelfMonths = new Date(); // Объявляем метод new Date чтобы потом получить числовое значение текущего месяца
	let month = twelfMonths.getMonth(); // Получаем числовое значение текущего месяца

	switch (month) { // Через switch сравниваем число месяца с заготовками под вывод сообщения через alert(); с порой года и сокращённым названием месяца.
		case 0 : alert('ЯНВ Это зимний месяц!'); break;
		case 1 : alert('ФЕВ Это зимний месяц!'); break;
		
		case 2 : alert('МАР Это весенний месяц!'); break;
		case 3 : alert('АПР Это весенний месяц!'); break;
		case 4 : alert('МАЙ Это весенний месяц!'); break;

		case 5 : alert('ИЮН Это летний месяц!'); break;
		case 6 : alert('ИЮЛ Это летний месяц!'); break;
		case 7 : alert('АВГ Это летний месяц!'); break;

		case 8 : alert('СЕН Это осенний месяц!'); break;
		case 9 : alert('ОКТ Это осенний месяц!'); break;
		case 10 : alert('НОЯ Это осенний месяц!'); break;

		case 11 : alert('ДЕК Это зимний месяц!'); break;
	}

/* Task #9 Не пойму почему в блоке if выдаёт в результате день на английском при изначальном вводе ru?
	let lang может принимать два значения: 'ru' и 'en'.
	let day принимает значение от 0 до 6.
	Если lang == 'ru', то в let result записать название дня недели на русском в соответствии со значением let day (0 - Воскресенье, 1 - Понедельник, 2 - Вторник и т.д.).
	Если lang == 'en', то аналогично, но день недели на английском.
*/
	let langOption = prompt('Узнайте какой сегодня день на английском (en) или на русском (ru)');
	let lang = langOption.toLowerCase;
	let sevenDays = new Date();
	let day = sevenDays.getDay();
	let result;

	if (day == 0) {
		if (lang == 'ru') {
			result = 'Воскресенье';
		} else {result = 'Sunday';}
	} else if (day == 1) {
		if (lang == 'ru') {
			result = 'Понедельник';
		} else {result = 'Monday';}
	} else if (day == 2) {
		if (lang == 'ru') {
			result = 'Вторник';
		} else {result = 'Tuesday';}
	} else if (day == 3) {
		if (lang == 'ru') {
			result = 'Среда';
		} else {result = 'Wendsday';}
	} else if (day == 4) {
		if (lang == 'ru') {
			result = 'Четверг';
		} else {result = 'Tuesday';}
	} else if (day == 5) {
		if (lang == 'ru') {
			result = 'Пятница';
		} else {result = 'Frieday';}
	} else if (day == 6) {
		if (lang == 'ru') {
			result = 'Суббота';
		} else {result = 'Saturday';}
	}

	alert(result);

/* Task #10 Не понимаю что делать с case NaN
	Найти и исправить ошибки в коде.
*/
	/* Исходный код задания
		var x = prompt('x', 0);
		var error;

		switch (x) {
			case 0: error = 'На ноль делить нельзя';
			case 1: error = 'На единицу делить бессмысленно';
			case NaN: error = 'Не математическая операция';
		}

		if (error) {
			alert(error);
		} else {
			alert(100 / x);
		}
	*/

	let x = +prompt('x', ''); //Добавляем '+' для преобразования возвращаемого значения из строки в число.
	let errorTips; //Меняем имя переменной, error системное название и зарезервировано js, его нельзя использовать в имени переменной.

	switch (x) {
		case 0: errorTips = 'На ноль делить нельзя'; break; // Добавляем break.
		case 1: errorTips = 'На единицу делить бессмысленно'; break; // Добавляем break.
		case NaN: errorTips = 'Не математическая операция'; break; // Добавляем break.
	}
		if (errorTips) {
			alert(errorTips);
		} else {
			alert((100 / x).toFixed(2)); // Добавляем метод toFixed() для округления результат до 2 символа после точки.
		}