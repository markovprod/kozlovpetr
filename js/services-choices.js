let choices = document.querySelectorAll('.service-choice');

let btns = document.querySelectorAll('.service-selector-btn');

btns.forEach(element => {
	element.addEventListener('click', (e) => {
		e.stopPropagation();		
		let selector = element.closest('.service-selector');
		let list = selector.querySelector('.service-selector-list');
		let arrow = selector.querySelector('.service-choice-arrow');
		
		list.classList.toggle('hidden');
		arrow.classList.toggle('open');
	})	
});

document.addEventListener('click', () => {
	document.querySelectorAll('.service-selector-list').forEach(list => {
        list.classList.add('hidden');
    });
	document.querySelectorAll('.service-choice-arrow').forEach(arrow => {
        arrow.classList.remove('open');
    });
})

const serviceVariants = {
	express: {
	  title: "Экспресс",
	  description: "экспресс: Готовая авторская игра + базовый разбор. Идеально для знакомства с деловыми играми и точечной прокачки навыков",
	  duration: "от 60 мин.",
	  price: "от 30 000 ₽"
	},
    
	comand: {
	  title: "Командный",
	  description: "командный: Адаптация сценария под ваши реалии + углублённый дебрифинг и диагностика",
	  duration: "от 2 ч.",
	  price: "ПО ИТОГАМ БРИФА"
	},
    
	strategy: {
	  title: "Стратегический",
	  description: "стратегический (индивидуально): Разработка уникальной симуляции под бизнес-процессы вашей компании с пост-игровым сопровождением",
	  duration: "ПО ИТОГАМ БРИФА",
	  price: "ПО ИТОГАМ БРИФА"
	},

	expressStratSession: {
		title: "Экспресс",
		description: "экспресс: Однодневная сессия с готовой методологией. Подходит для малого бизнеса и стартапов, которым нужно быстро синхронизировать видение",
		duration: "6 ч.",
		price: "от 70 000 ₽"
	  },
	  
	  standard: {
		title: "Командный",
		description: "стандарт: Диагностика текущей ситуации + проработка стратегии + дорожная карта с KPI. Идеально для компаний на этапе роста или трансформации",
		duration: "2 д.",
		price: "ПО ИТОГАМ БРИФА"
	  },
	  
	  premium: {
		title: "Премиум",
		description: "Премиум (индивидуально): Стратегическая сессия + сопровождение реализации + ежеквартальные ревью стратегии с топ-командой",
		duration: "3-6 мес.",
		price: "ПО ИТОГАМ БРИФА"
	  },
	
	  expressDiagnostic: {
		title: "Экспресс-диагностика",
		description: "экспресс-диагностика: Базовый мониторинг ключевых метрик + выявление «узких горлышек» + список рекомендаций. Подходит для малого бизнеса, которому нужен быстрый срез состояния",
		duration: "5 сессий",
		price: "от 50 000 ₽"
	  },
	  
	  optimisation: {
		title: "Оптимизация",
		description: "Оптимизация: Углубленный анализ процессов + разработка плана улучшений + сопровождение внедрения изменений. Для компаний на этапе роста",
		duration: "10 сессий",
		price: "от 100 000 ₽"
	  },
	  
	  stratMaintenance: {
		title: "Стратегическое сопровождение",
		description: "Стратегическое сопровождение: индивидуальный непрерывный мониторинг KPI, ежемесячные отчеты по показателям закзачика, а также ежеквартальная корректировка стратегии. Для среднего и крупного бизнесов — полное / частичное выполнение роли аналитического отдела",
		duration: "РЕГУЛЯРНО",
		price: "ПО ИТОГАМ БРИФА"
	  },

	  pointConsultation: {
		title: "Точечная консультация",
		description: "Точечная консультация: Разбор одной конкретной управленческой задачи + персональные рекомендации. Идеально для быстрого получения экспертного взгляда.(заранее отправляется запрос).",
		duration: "60 мин.",
		price: "от 5 000 ₽"
	  },
	  
	  diagnosticPackage: {
		title: "Диагностический пакет",
		description: "Диагностический пакет: Глубокий анализ ситуации, дорожная карта изменений, сопровождение первых шагов внедрения. Подходит для комплексных задач (рост, трансформация, выход из кризиса).",
		duration: "3 сессии",
		price: "ПО ИТОГАМ БРИФА"
	  },
	  
	  regularSupport: {
		title: "Регулярное сопровождение",
		description: "Регулярное сопровождение: Серия консультаций + аналитический мониторинг + связь с экспертом между встречами. Формат «персональный бизнес-советник» для собственников и CEO",
		duration: "ЕЖЕМЕСЯЧНО",
		price: "ПО ИТОГАМ БРИФА"
	  }
    };

choices.forEach((element, index) => {
	let card = element.closest('.service-card');
	let button = card.querySelector('.service-selector-btn');
	let serviceDescription = card.querySelector('.service-desc-second');
	let durationItem = card.querySelector('.duration-item');
	let priceItem = card.querySelector('.price-item');
	element.addEventListener('click', () => {
		let variant = element.dataset.service;
		let info = serviceVariants[variant];
		button.textContent = info.title;
		serviceDescription.textContent = info.description;
		durationItem.textContent = info.duration;
		priceItem.textContent = info.price;
	})
});