const upFaqArrow = document.getElementById('slider-faq-up-arrow');

const downFaqArrow = document.getElementById('slider-faq-down-arrow');

const sliderFaqTrack = document.getElementById('slider-faq-track');

const arrFaq = document.getElementsByClassName('faq-slide');

const slideFaqHeight = document.querySelector('.faq-slide').offsetHeight;

const faqPosMax = arrFaq.length - 1;

let pos = 0;

let faqSlidePos = pos * slideFaqHeight;

let isTouched = false;

let startY = 0;

let endY = 0;


if (window.innerHeight > window.innerWidth){
	function getOffset(index) {
		let offset = 0;
	  
		for (let i = 0; i < index; i++) {
		    offset += arrFaq[i].offsetHeight + 45;
		}
	  
		return offset;
	}
	function changeSlides(dir) {
		if (dir && pos < faqPosMax) {
		    pos++;
		} else if (!dir && pos > 0) {
		    pos--;
		}
		
		sliderFaqTrack.style.transform =
		    `translateY(${(getOffset(pos) - 140) * (-1)}px)`;
	}

	sliderFaqTrack.addEventListener('touchstart', (e) => {
		startY = e.changedTouches[0].clientY;
	});
	
	sliderFaqTrack.addEventListener('touchend', (e) => {
		endY = e.changedTouches[0].clientY;
		handleSwipe();
	});
	
	function handleSwipe(){
		const threshold = 50;
		if(endY < startY - threshold){
			changeSlides(true);
		}
		if(endY > startY + threshold){
			changeSlides(false);
		}
	}
}
else{
	downFaqArrow.addEventListener('click', function(){
		pos -= 1;
		if(pos < (-faqPosMax) + 1){
			pos = 1;
			
		}
		faqSlidePos = pos * slideFaqHeight;
		sliderFaqTrack.style.transform = `translateY(${faqSlidePos}px)`;
	})

	upFaqArrow.addEventListener('click', function(){
		pos += 1;
		if(pos > 1){
			pos = -faqPosMax + 1;
		}
		faqSlidePos = pos * slideFaqHeight;
		sliderFaqTrack.style.transform = `translateY(${faqSlidePos}px)`;
	})
}
sliderFaqTrack.addEventListener('touchmove', function(event) {
	event.stopPropagation();

	event.preventDefault();
  }, { passive: false });