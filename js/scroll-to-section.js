document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		console.log('click');
	    e.preventDefault(); // Отменяем стандартное поведение
  
	    const targetId = this.getAttribute('href');
	    const targetElement = document.querySelector(targetId);
  
	    if (targetElement) {
		  targetElement.scrollIntoView({
			behavior: 'smooth', // Плавный скролл
			block: 'start'      // Скролл к началу элемента
		  });
	    }
	});
  });