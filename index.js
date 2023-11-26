// Получаем ссылку на элемент с id "fetchButton"
const fetchButton = document.getElementById("fetchButton");

// Получаем ссылку на элемент с id "result"
const resultDiv = document.getElementById("result");

// Получаем ссылку на элемент с id "error"
const errorDiv = document.getElementById("error");

// Добавляем слушатель события "click" на кнопку "fetchButton" для выполнения функции fetchData

// Объявляем функцию fetchData, которая будет вызываться при нажатии на кнопку "fetchButton"
fetchButton.addEventListener("click", () => {
	// Получаем значения из элементов с id "entity" и "id"
	const entity = document.getElementById("entity").value;
	const id = document.getElementById("id").value;

	// Очищаем содержимое элементов "resultDiv" и "errorDiv" перед новым запросом
	resultDiv.textContent = "";
	errorDiv.textContent = "";

	// Создаем элемент лоадера и добавляем его в "resultDiv"
	const loader = document.createElement("div");
	loader.classList.add("loader");
	resultDiv.appendChild(loader);

	// Отправляем запрос на сервер по указанному URL
	fetch(`https://swapi.dev/api/${entity}/${id}`)
		.then((response) => {
			// Проверяем, успешен ли запрос
			if (!response.ok) {
				// Если запрос не успешен, выбрасываем ошибку с текстом статуса ответа
				throw new Error(response.statusText);
			}
			// Возвращаем данные в формате JSON
			return response.json();
		})
		.then((data) => {
			// Удаляем лоадер после получения данных и отображаем результат
			resultDiv.removeChild(loader);
			// Проверяем тип полученных данных (массив или объект)
			if (Array.isArray(data)) {
				// Если данные - массив, перебираем каждый элемент и создаем элемент <p> с именем, добавляя его в "resultDiv"
				data.forEach((item) => {
					const nameElement = document.createElement("p");
					nameElement.textContent = "Name:" + item.title;
					resultDiv.appendChild(nameElement);
				});
			} else {
				// Если данные - не массив, создаем элемент <p> с именем из данных и добавляем его в "resultDiv"
				const nameElement = document.createElement("p");
				nameElement.textContent = "Name:" + " " + data.title;
				resultDiv.appendChild(nameElement);
			}
		})
		.catch((error) => {
			// Удаляем лоадер при возникновении ошибки и отображаем текст ошибки в "errorDiv"
			resultDiv.removeChild(loader);
			errorDiv.textContent = `Error: ${error.message}`;
		});
});

//Фон
let boxshadow = "";

for (let i = 0; i <= 2000; i++) {
	px = Math.random() < 0.5 ? "-" : "";
	py = Math.random() < 0.5 ? "-" : "";
	x = Math.floor(Math.random() * window.innerWidth + 1);
	y = Math.floor(Math.random() * window.innerHeight + 1);
	s = Math.floor(Math.random() * 2 - 1);
	boxshadow += px + x + "px " + py + y + "px 0 " + s + "px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;
