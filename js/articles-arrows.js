const leftArticlesArrow = document.getElementById('articles-left-arrow-btn');

const rightArticlesArrow = document.getElementById('articles-right-arrow-btn');

const sliderArticlesTrack = document.getElementById('slider-articles-track');

const arrArticles = document.getElementsByClassName('articles-slide');

const slideArticlesLen = document.querySelector('.articles-slide').offsetWidth + 39;

const posArticlesMax = arrArticles.length;

const pags = document.querySelectorAll('.m-art-pag-item');
const pagsVisible = document.querySelectorAll('.m-art-pag-item-visible');

let posArticles = 0;

let startX = 0;

let startY = 0;

let endX = 0;

let gestureDirection = null;


if (window.innerHeight > window.innerWidth){
	function changeSlides(dir){
		if (dir === true && posArticles < (posArticlesMax - 1)){
			posArticles += 1;
			
		}
		else if(dir === false && posArticles > 0){
			posArticles -= 1;
		}
		sliderArticlesTrack.style.transform = `translateX(-${posArticles * 100}%)`;
		pagsVisible.forEach((element, ind) => {
			if (ind === posArticles){
				element.style.backgroundColor = '#5c5c5c';
			}
			else{
				element.style.backgroundColor = 'var(--color-light)';
			}
		});
	}
	changeSlides();

	sliderArticlesTrack.addEventListener('touchstart', (e) => {
		startX = e.changedTouches[0].clientX;
		startY = e.changedTouches[0].clientY;
	  
		gestureDirection = null;
	});

	sliderArticlesTrack.addEventListener(
		'touchmove',
		(e) => {
		    if (gestureDirection) {
			  if (gestureDirection === 'horizontal') {
				e.preventDefault();
			  }
			  return;
		    }
	  
		    const dx = Math.abs(e.touches[0].clientX - startX);
		    const dy = Math.abs(e.touches[0].clientY - startY);
	  
		    if (dx < 10 && dy < 10) return;
	  
		    gestureDirection = dx > dy ? 'horizontal' : 'vertical';
	  
		    if (gestureDirection === 'horizontal') {
			  e.preventDefault();
		    }
		},
		{ passive: false }
	  );
	
	sliderArticlesTrack.addEventListener('touchend', (e) => {
		if (gestureDirection !== 'horizontal') return;
	  
		endX = e.changedTouches[0].clientX;
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
	pags.forEach((element, ind) => {
		element.addEventListener('click', () => {
			posArticles = ind;
			changeSlides();
		})
	});
}
else{
	function arrowsArticlesColorSwap(){
		if (posArticles === 0){
			leftArticlesArrow.style.fill = 'var(--color-gray-borders)';
		}
		else{
			leftArticlesArrow.style.fill = 'var(--color-light-gray)';
		}
		if (posArticles === (posArticlesMax - 1)){
			rightArticlesArrow.style.fill = 'var(--color-gray-borders)';
		}
		else{
			rightArticlesArrow.style.fill = 'var(--color-light-gray)';
		}
	}

	leftArticlesArrow.addEventListener('click', function(){
		if(posArticles > 0){
			posArticles -= 1;
			sliderArticlesTrack.style.transform = `translateX(-${posArticles * slideArticlesLen}px)`;
		}
		else{
			console.log('Не удалось');
		}
		arrowsArticlesColorSwap();
	})

	rightArticlesArrow.addEventListener('click', function(){
		if(posArticles < (posArticlesMax - 1)){
			posArticles += 1;
			sliderArticlesTrack.style.transform = `translateX(-${posArticles * slideArticlesLen}px)`;
		}
		arrowsArticlesColorSwap();
	})
}

