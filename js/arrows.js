const leftArrow = document.getElementById('left-arrow-btn');
const rightArrow = document.getElementById('right-arrow-btn');
const btnGoTo = document.getElementById('btn-go-to');
const heroPhoto = document.getElementById('hero-photo');
const mainText = document.getElementById('main-text-swap');
let leftArrowWorking = false;
let rightArrowWorking = true;
document.documentElement.style.setProperty('--main-color', 'var(--color-blue)');
let arrColor = ['var(--color-blue)', 'var(--color-light-brown)', 'var(--color-violet)', 'var(--color-green)'];
let arrBtnTexts = ['Перейти в тг-канал «дневник тех.предпринимателя»', 'Перейти в тг- канал мастерской деловых игр', 'Перейти в канал на яндекс-дзен', 'Перейти на сайт Умный дом омск'];
let arrBtnUrls = ['https://t.me/technicalpred', 'https://t.me/piratesofthe5seas', 'https://dzen.ru/kozlovpetr?share_to=link', 'https://умныйдомомск.рф/'];
let arrPhotoSources = ['assets/images/hero-section-first.png', 'assets/images/hero-section-second.png', 'assets/images/hero-section-third.png', 'assets/images/hero-section-fourth.png'];
let arrMainTextSwap = ['Бизнес-наставник', 'игротехник', 'Спикер', 'генеральный директор ООО «Умный дом Омск»'];
let pos = 0;

function arrowsSwap(){
	if (pos > 0){
		leftArrow.style.fill = 'var(--color-dark)';
		leftArrowWorking = true;
	}
	else{
		leftArrow.style.fill = 'var(--color-arrow-gray)';
	}
	if (pos < 3){
		rightArrow.style.fill = 'var(--color-dark)';
		rightArrowWorking = true;
	}
	else{
		rightArrow.style.fill = 'var(--color-arrow-gray)';
	}
}

rightArrow.addEventListener('click', function(){
	console.log('1 Right', pos, rightArrowWorking)
	if (pos == 3){
		rightArrowWorking = false;
	}
	else if (pos === 0) {
		leftArrowWorking = false;
	}

	if (rightArrowWorking){
		pos += 1;
		document.documentElement.style.setProperty('--main-color', arrColor[pos]);
		btnGoTo.textContent = arrBtnTexts[pos].toUpperCase();
		btnGoTo.setAttribute('href', arrBtnUrls[pos]);
		heroPhoto.setAttribute('src', arrPhotoSources[pos]);
		mainText.textContent = arrMainTextSwap[pos].toUpperCase();
	}
	
	
	arrowsSwap();
	console.log('2 Right', pos, rightArrowWorking)
})

leftArrow.addEventListener('click', function(){
	console.log('1 Left', pos, leftArrowWorking)

	if (pos == 3){
		rightArrowWorking = false;
	}
	else if (pos === 0) {
		leftArrowWorking = false;
	}

	if (leftArrowWorking){
		pos -= 1;
		document.documentElement.style.setProperty('--main-color', arrColor[pos]);
		btnGoTo.textContent = arrBtnTexts[pos].toUpperCase();
		btnGoTo.setAttribute('href', arrBtnUrls[pos]);
		heroPhoto.setAttribute('src', arrPhotoSources[pos]);
		mainText.textContent = arrMainTextSwap[pos].toUpperCase();
	}

	
	arrowsSwap();
	console.log('1 Left', pos, leftArrowWorking)
})