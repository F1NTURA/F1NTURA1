function getExactLocation() {
	navigator.geolocation.getCurrentPosition(
	  (position) => {
		const accuracy = position.coords.accuracy; // Точность в метрах
		console.log('Широта:', position.coords.latitude);
		console.log('Долгота:', position.coords.longitude);
		console.log('Точность:', accuracy, 'м');
  
		// Если точность слишком низкая, запрашиваем данные снова
		if (accuracy > 20) {  // Если точность больше 20 метров, пробуем снова
		  console.log('Точность низкая, повторяем запрос...');
		  getExactLocation();
		}
	  },
	  (error) => {
		console.error('Ошибка получения геоданных:', error);
	  },
	  {
		enableHighAccuracy: true,   // Включаем высокую точность
		timeout: 10000,             // Время ожидания запроса (10 секунд)
		maximumAge: 0               // Не использовать кэшированные данные
	  }
	);
  }
  
  // Запускаем функцию
  getExactLocation();
  
