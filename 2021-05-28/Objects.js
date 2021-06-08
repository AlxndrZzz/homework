// homework 2021-05-28 Objects

/* Task #1
	Создайте структуру данных, полностью описывающую html-разметку картинки.
	С помощью методов браузера добавьте её на страницу со всеми атрибутами, читая значения свойств 
	из созданного объекта.
*/
	let img = {
		src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
		alt: '',
		style: 'border: 1px solid #ccc',
		width: 200
	}


/* Task #2
	Создайте объект dates для хранения дат. 
	Первая дата - позавчера. 
	Вторая дата - текущая дата (new Date) минус 365 дней. 
	Из prompt читается дата в формате yyyy-MM-dd.
	Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
*/
	let enterDate = prompt('Введите дату в формате ГГГГ-ММ-ДД', '')
	
	let now = new Date();

	let convMsToDays = Math.round(((now.getTime() / 1000) / 3600) / 24); // конвертируем полученные миллисекунды в дни c округлением до дня (прошедшего времени с 1970-го по сегодня)
	
	let dates = {
		twoDaysAgo: day - 2,
		today: year - 1,
		year: now.getFullYear(),
		month: now.getMonth(),
		day: now.getDate()

	}

	//convMsToDays = Math.round(((now.getTime() / 1000) / 3600) / 24); // конвертируем полученные миллисекунды в дни c округлением до дня (прошедшего времени с 1970-го по сегодня)

	//if (enterDate === dates)
	//console.log(dates.twoDaysAgo);
	console.log(dates.twoDaysAgo + ' - позавчера' + '\n' + dates.today + ' - год назад, минус год' + '\n' + dates.day + '- день');



/* Task #3
	Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
	Запустите цикл, в котором через prompt запрашивается имя свойства. 
	С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран. 
	Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
	Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt.
*/
	let amountProperties = +prompt('Введите количество свойств в объекте person', '');
	let nameGiver;
	let valueProperties;

	let person = {};

	for (let i = 1; i <= amountProperties; i++) {
		nameGiver = prompt('Введите имя свойству в объекте person', '');


		if (nameGiver in person) {
			alert(nameGiver + ' существует в объекте person!');
		} else if (valueProperties !== null) {
			valueProperties = prompt('Введите значение в свойстве ' + nameGiver, '');
			person.nameGiver = valueProperties;
		} else {
			break;
		};
	};
	

/* Task #4
	Запустить бесконечный цикл.
	В цикле вызвать prompt, в котором пишется delete либо update.
	Если указано delete, то удалить свойство, если update, то добавить или редактировать свойство 
	в объекте person (где уже есть свойство телефон).
	Какое свойство добавить или удалить задаётся в prompt.
	Значение у добавленного свойства задаётся в prompt.
	При нажатии отмена в prompt редактирование объекта person заканчивается и обновлённые данные 
	распечатываются в консоли.
*/
	let person = {
		phone: 380930123456,
	};
	let confirmChangeProp;
	let addOrDelProp
	let delProp;
	let updProp;

	// запускается бесконечный цикл, но если вместо true вставить (addOrDelProp !== null), тогда цикл прервётся только при нажатии Отмена
	while (true) {
		// вводим delete\update
		addOrDelProp = prompt('Введите: \ndelete чтобы удалить свойство \nupdate чтобы добавить/редактировать свойство', '');
			// проверяем введены ли ключевые слова delete или update	
			if (addOrDelProp === 'delete' || addOrDelProp === 'update') {
				// если введено delete, то запускаем цикл...
				if (addOrDelProp === 'delete') {
					// ...цикл работает пока не будет нажата Отмена в окне prompt запрашимаемого имени удаляемого свойства
					while (delProp !== null) {
						// запрашиваем имя удаляемого свойства из списка доступных свойств в объекте person
						delProp = prompt('Какое свойство удалить? \n' + Object.keys(person), '');
						// если имя удаляемого свойства существует в объекте person, то оно удаляется и...
						// ...выводится сообщение об успешном удалении свойства с выходом из цикла через break...
						// ...иначе, если нажимается Отмена в prompt, то происходит выход из цикла...
						// ...иначе выводим предупреждение через alert что такого...
						// ...свойства нет и просим ввести заного переходя в начало цикла
						if (delProp in person) {
							delete person[delProp];
							alert('Свойство ' + delProp + ' успешно удалено!');
							break;
						} else if (delProp === null) {
				            break;        
				        } else alert('Нет такого свойства! Введите заного.'); 
					};
				} else if (addOrDelProp === 'update') { // если введено update в окне запроса команды delete/update...
					// ...тогда запрашиваем имя добавляемого/редактируемого свойства
					updProp = prompt('Введите имя нового свойства для добавления в объект. \nИли редактирования существующего свойства:\n' + Object.keys(person), '');
					// проверяем есть ли такое свойство в объекте?
					if (updProp in person) {
						// если да, то запрашиваем подтверждение через confirm на редактирование значения свойству
						confirmChangeProp = confirm('Хотите изменить значение в свойстве ' + updProp + ' ?');
						// если нажать ОК, то будет запрошено новое значение для редактируемого свойства
						if (confirmChangeProp === true) {
							let newValueProp = prompt('Введите новое значение для свойства ' + updProp, '');
							person[updProp] = newValueProp;
						}
					} else { // иначе если нету такого свойства в объекте, то вводим значение для него и добавляем 
						let valueToNewProp = prompt('Введите значение для нового свойства ' + updProp, '');
						person[updProp] = valueToNewProp;
					}
				}
			} else if (addOrDelProp === null) { // если нажать Отмена, тогда прекращается редактирование объекта и выводится содержимое объекта person
				console.log(person);
			} else alert('Введена не верная команда! \nВведите delete или update'); // если введено значение кроме delete и update, то выведет сообщение о неверной команде
	}


/* Task #5. Не знаю как в скрипте обратиться к ранее сгенерированному объекту чтобы отобразить результат на странице в браузере.
			Поэтому вставил заготовочку объекта person в этом задании.
	Динамически (скриптом) создайте HTML элемент <dl>.
	Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени 
	свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS).
*/
	let person = {
		phone: 380930123456,
		name: 'Alxndr',
		sex: 'male',
	};

	let elemDiv = document.createElement('div');
		document.body.appendChild(elemDiv);

	let descriptList = document.createElement('dl');
		elemDiv.appendChild(descriptList);

	for (let key in person) {

		let descriptTermin = document.createElement('dt');
		descriptList.appendChild(descriptTermin);
		descriptTermin.innerText = key;

		let descriptDefenition = document.createElement('dd');
		descriptList.appendChild(descriptDefenition);
		descriptDefenition.innerText = person[key];
	}



/* Task #6
	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями из 
	prompt (например: brand, model, resolution, color...).
	Добавьте этот гаджет персоне, созданной ранее.
	После этого создайте независимую копию объекта, не используя встроенный метод Object.assign и 
	JSON.parse, а то есть перебором свойств.
*/
	let person = {
		phone: 380930123456,
	};	
	let mobilePhone = {
		brand: null,
		model: null,
		resolution: null,
		color: null,
	};
	let chooseProp;
	let valueProp;

	while (chooseProp !== null) {
		chooseProp = prompt('Введите имя свойства из списка чтобы задать ему значение:\n' + Object.keys(mobilePhone), '');
	
		if (chooseProp in mobilePhone) {
			valueProp = prompt('Введите значение для свойства ' + chooseProp, '');
			mobilePhone[chooseProp] = valueProp;
			alert('Значение успешно добавлено свойству ' + chooseProp);
		} else if (valueProp === null) {
			break;
		} else if (chooseProp === null) {
			break;
		} else alert('Выберите свойство из списка\n' + Object.keys(mobilePhone));
	};

	person.mobilePhone = mobilePhone;

	console.log(person);

	let personCopy = {};

	for (let key in person) {
		personCopy[key] = person[key];
	}

	console.log(personCopy);


/* Task #7
	С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. 
	Добавьте поля объекта gadget в созданный ранее список <dt>.
*/
	let personCopy = {
		phone: 380930123456,
	};

	let {phone: gadget} = personCopy;

	console.log(gadget);