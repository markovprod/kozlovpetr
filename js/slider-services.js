const arrBtn = document.querySelectorAll('.type-section-btn');

const sliderTrack = document.getElementById('slider-services-track');

const pags = document.querySelectorAll('.m-ser-pag-item');

let startX = 0;
let endX = 0;
let pos = 0;

if (window.innerHeight > window.innerWidth){
	function changeSlides(dir){
		if (dir === true && pos < 3){
			pos += 1;
			
		}
		else if(dir === false && pos > 0){
			pos -= 1;
		}
		sliderTrack.style.transform = `translateX(-${pos * 100}%)`;
		pags.forEach((element, ind) => {
			if (ind === pos){
				element.style.backgroundColor = '#5c5c5c';
			}
			else{
				element.style.backgroundColor = 'var(--color-light)';
			}
		});
	}
	changeSlides();

	sliderTrack.addEventListener('touchstart', (e) => {
		startX = e.changedTouches[0].screenX;
	});
	
	sliderTrack.addEventListener('touchend', (e) => {
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
	function changeSlide(index){
		sliderTrack.style.transform = `translateX(-${index * 100}%)`;

		arrBtn.forEach((btn, btnIndex) =>{
			if (btnIndex === index) {
				btn.style.color = 'var(--color-light)';
			}
			else {
				btn.style.color = 'var(--color-dark)';
			}
		});
	};

	arrBtn.forEach(btn => {
		btn.addEventListener('click', (e) => {
			const targetIndex = Number(e.target.dataset.index);

			changeSlide(targetIndex);
		});
		
	});
}

