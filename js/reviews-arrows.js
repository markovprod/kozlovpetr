const leftReviewArrow = document.getElementById('review-left-arrow-btn');

const rightReviewArrow = document.getElementById('review-right-arrow-btn');

const sliderReviewTrack = document.getElementById('slider-reviews-track');

const arrReview = document.getElementsByClassName('review-slide');

const slideLen = document.querySelector('.review-slide').offsetWidth + 29;

const pags = document.querySelectorAll('.m-rev-pag-item');

const posiMax = arrReview.length;

let posi = 0;

let startX = 0;

let endX = 0;

if (window.innerHeight > window.innerWidth){
	function changeSlides(dir){
		if (dir === true && posi < (posiMax - 1)){
			posi += 1;
			
		}
		else if(dir === false && posi > 0){
			posi -= 1;
		}
		sliderReviewTrack.style.transform = `translateX(-${posi * 100}%)`;
		pags.forEach((element, ind) => {
			if (ind === posi){
				element.style.backgroundColor = '#5c5c5c';
			}
			else{
				element.style.backgroundColor = 'var(--color-light)';
			}
		});
	}
	changeSlides();

	sliderReviewTrack.addEventListener('touchstart', (e) => {
		startX = e.changedTouches[0].screenX;
	});
	
	sliderReviewTrack.addEventListener('touchend', (e) => {
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
}
else{
	function arrowsColorSwap(){
		if (posi === 0){
			leftReviewArrow.style.fill = 'var(--color-gray-borders)';
		}
		else{
			leftReviewArrow.style.fill = 'var(--color-light-gray)';
		}
		if (posi === (posiMax - 1)){
			rightReviewArrow.style.fill = 'var(--color-gray-borders)';
		}
		else{
			rightReviewArrow.style.fill = 'var(--color-light-gray)';
		}
	}

	leftReviewArrow.addEventListener('click', function(){
		if(posi > 0){
			posi -= 1;
			sliderReviewTrack.style.transform = `translateX(-${posi * slideLen}px)`;
		}
		else{
			console.log('Не удалось');
		}
		arrowsColorSwap();
	})

	rightReviewArrow.addEventListener('click', function(){
		if(posi < (posiMax - 1)){
			posi += 1;
			sliderReviewTrack.style.transform = `translateX(-${posi * slideLen}px)`;
		}
		else{
			console.log('Не удалось');
		}
		arrowsColorSwap();
	})
}

