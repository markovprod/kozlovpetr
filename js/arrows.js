const leftArrow = document.getElementById('left-arrow-btn');
const rightArrow = document.getElementById('right-arrow-btn');
const btnGoTo = document.getElementById('btn-go-to');
const mainText = document.getElementById('main-text-swap');

let leftArrowWorking = false;
let rightArrowWorking = true;

const heroPhotos = document.querySelectorAll('.hero-section-photo');

document.documentElement.style.setProperty('--main-color', 'var(--color-blue)');
let arrColor = ['var(--color-blue)', 'var(--color-light-brown)', 'var(--color-violet)', 'var(--color-green)'];
let arrBtnTexts = ['Перейти в тг-канал «дневник тех.предпринимателя»', 'Перейти в тг- канал мастерской деловых игр', 'Перейти в канал на яндекс-дзен', 'Перейти на сайт Умный дом омск'];
let arrBtnUrls = ['https://t.me/technicalpred', 'https://t.me/piratesofthe5seas', 'https://dzen.ru/kozlovpetr?share_to=link', 'https://умныйдомомск.рф/'];
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

function changeSlide(position){
	document.documentElement.style.setProperty('--main-color', arrColor[position]);
		btnGoTo.textContent = arrBtnTexts[position].toUpperCase();
		btnGoTo.setAttribute('href', arrBtnUrls[position]);
		mainText.textContent = arrMainTextSwap[position].toUpperCase();

		heroPhotos.forEach((element, photoId) => {
			if (photoId === position){
				element.style.opacity = '1';
			}
			else{
				element.style.opacity = '0';
			}
		});
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
		changeSlide(pos);
	}
	
	
	arrowsSwap();
})

leftArrow.addEventListener('click', function(){

	if (pos == 3){
		rightArrowWorking = false;
	}
	else if (pos === 0) {
		leftArrowWorking = false;
	}

	if (leftArrowWorking){
		pos -= 1;
		changeSlide(pos);
	}

	
	arrowsSwap();
})

changeSlide(pos);	