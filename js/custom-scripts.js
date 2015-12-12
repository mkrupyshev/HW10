// Создание переменных с текстом
// Чтоб код заработал, уберите комментарий




// var variable = 'Hello';
// var variableTwo = 'Digitov';

// Вывод сообщения на екран

// alert(variable + " " + variableTwo);

// Цифровые переменные

// var myNumber = 2;
// var myAge = 24;
// var myYear = 2015;
// // var result = myAge != myNumber;

// // alert(result);

// // prompt('text');

// // confirm('Вы правда студент?');

// // console.log("Age =" + myAge);
// // console.log('Year = ' + myYear);



// var time = 9;


// // Условный оператор
// if (time > 18) {
// 	console.log('уже ночь')
// } else if(time < 6){
// 	console.log('еще ночь')
// } else {
// 	console.log('день')
// }


// -- Способ выборки элемента по id используя синтаксис JavaScript
// var firtsID = document.getElementById('firstId');
// -- Способ выборки элемента по id используя синтаксис JQuery
// var firstID = $('.js-list .js-item:first-child');

// console.log(firstID);


// Событие, говорящее о том, что наш глобальный обьект document готов к работе
// Желательно каждый скрипт начинать с такой строчки
$(document).ready(function(){


	// -- Событие клика
	// $('.clickMeButton').click(function(){
	// 	alert('I am click!')
	// })


	// --Событие наведения курсора мыши
	// $('.clickMeButton').hover(function(){
	// 	alert('I am click!')
	// })

	//  -- Метод, позволяющий изменить css-правила по клику
	// $('.clickMeButton').click(function(){
	// 	var titleText = $('#firstId').css({
	// 		'color' : 'blue',
	// 		'textDecoration' : 'underline'
	// 	});
	// 	console.log(titleText)
	// })

	//  -- Замена / удаление / добавление классов
	// $('.clickMeButton').click(function(){
	// 	$('#firstId').toggleClass('redClass');
	// 	// $('#firstId').addClass('blueClass');
	// 	// $('#firstId').removeClass('redClass');
	// })


	//  -- Скрытие / отображение элемента
	// $('.clickMeButton').click(function(){
	// 	$('#firstId').toggle(500);
	// })

	//  -- Скрытие / отображение по типу "Размытия"
	// $('.clickMeButton').click(function(){
	// 	$('#firstId').fadeIn(500);
	// })

	// $('.clickMeButton').click(function(){
	// 	$('#firstId').fadeOut(500);
	// })


	//  -- Выборка значение введенного текста и отображение данного текста
	//  -- в другом html элементе
	$('.btn-primary').click(function(){
		var userName = $('#nameArea').val();
		// console.log(userName);
		$('.result-js').text(userName);
	})

	$('.square').mouseenter(function(){
		$('#square').addClass('blueBack');
	})

	$('.square').mouseleave(function(){
		$('#square').removeClass('blueBack');
	})

	// Чтоб не создавать дополнительные классы в css , можно 
	//  воспользоваться методом .css()
	// $('.square').mouseenter(function(){
	// 	$('#square').css({
	// 		'backgroundColor' : 'blue'
	// 	})
	// })

	// $('.square').mouseleave(function(){
	// 	$('#square').css({
	// 		'backgroundColor' : 'transparent'
	// 	})
	// })


})
