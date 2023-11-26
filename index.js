// Привязываем обработчик события "click" к кнопке с id "fetchButton"
document.getElementById("fetchButton").addEventListener("click", function () {
	// Получаем значение сущности и id из соответствующих элементов формы
	const entity = document.getElementById("entity").value;
	const id = document.getElementById("id").value;

	// Получаем ссылки на элементы с id "result" и "error"
	const resultDiv = document.getElementById("result");
	const errorContainer = document.getElementById("error");

	// Очищаем содержимое элементов "resultDiv" и "errorContainer" перед новым запросом
	resultDiv.textContent = "";
	errorContainer.textContent = "";

	// Создаем элемент лоадера и добавляем его в "resultDiv"
	const loader = document.createElement("div");
	loader.classList.add("loader");
	resultDiv.appendChild(loader);

	// Строим URL для API-запроса, используя значения сущности и id
	const apiUrl = `https://swapi.dev/api/${entity}/${id}/`;

	// Отправляем запрос к API
	fetch(apiUrl)
		.then((response) => {
			// Проверяем успешность ответа
			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`);
			}
			// Возвращаем данные в формате JSON из ответа
			return response.json();
		})
		.then((data) => {
			// Отображаем результат (отображаем только имя или заголовок, либо сообщение об отсутствии данных)
			resultDiv.textContent = `Name: ${
				data.name || data.title || "Нет данных для отображения"
			}`;
		})
		.catch((error) => {
			// Отображаем сообщение об ошибке
			errorContainer.textContent = error.message;
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
