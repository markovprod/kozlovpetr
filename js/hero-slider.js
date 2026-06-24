const slider = document.getElementById('hero-section-mobile');

const slides = document.querySelectorAll('.hero-mobile-photo');

const pags = document.querySelectorAll('.m-h-pag-item');

const btnGoTo = document.getElementById('mobile-btn-go-to');

const mainTextSwap = document.getElementById('mobile-main-text-swap')

let arrColor = ['var(--color-blue)', 'var(--color-light-brown)', 'var(--color-violet)', 'var(--color-green)'];

let arrBtnTexts = ['Перейти в телеграм-канал', 'Перейти в телеграм-канал', 'Перейти в канал яндекс-дзен', 'Перейти на сайт компании'];

let arrBtnUrls = ['https://t.me/technicalpred', 'https://t.me/piratesofthe5seas', 'https://dzen.ru/kozlovpetr?share_to=link', 'https://умныйдомомск.рф/'];

let arrMainTextSwap = ['Бизнес-наставник', 'игротехник', 'Спикер', 'CEO «Умный дом Омск»'];

let pos = 0;

let startX = 0;
let endX = 0;

slides[pos].style.opacity = '1';
pags[pos].style.backgroundColor = 'var(--color-dark)';

function changeSlides(dir){
	if (dir === true && pos < 3){
		pos += 1;
		
	}
	else if(dir === false && pos > 0){
		pos -= 1;
	}
	document.documentElement.style.setProperty('--main-color', arrColor[pos]);
	btnGoTo.textContent = arrBtnTexts[pos];
	btnGoTo.setAttribute('href', arrBtnUrls[pos]);
	mainTextSwap.textContent = arrMainTextSwap[pos];
	slides.forEach((element, ind) => {
		if (ind === pos){
			element.style.opacity = '1';
		}
		else{
			element.style.opacity = '0';
		}
	});
	pags.forEach((element, ind) => {
		if (ind === pos){
			element.style.backgroundColor = 'var(--color-dark)';
		}
		else{
			element.style.backgroundColor = 'var(--color-light)';
		}
	});
}

slider.addEventListener('touchstart', (e) => {
	startX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
	endX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe(){
	const threshold = 50;
	if(endX < startX - threshold){
		changeSlides(true);
	}
	if(endX > startX + threshold){
		changeSlides(false);
	}
}