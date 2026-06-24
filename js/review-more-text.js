const moreBtn = document.getElementById('review-full-text-btn-1');

const backBtn = document.getElementById('review-left-arrow-more-text');

const moreTextContainer = document.getElementById('review-more-text-container-1');

const moreTextMobile = document.getElementById('mobile-review-full-text-1');

const backBtnMobile = document.getElementById('review-collapse-text-btn-1');

const slide = moreBtn.closest('.review-slide');

if (window.innerHeight > window.innerWidth){
	moreBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		moreTextMobile.style.display = 'inline-block';
		backBtnMobile.style.display = 'inline-block';
		slide.style.height = '791px';
		slide.style.aspectRatio =  'auto';
		moreBtn.style.display = 'none';
	});

	backBtnMobile.addEventListener('click', (event) => {
		event.stopPropagation();
		moreTextMobile.style.display = 'none';
		backBtnMobile.style.display = 'none';
		slide.style.height = '707px';
		slide.style.aspectRatio =  '707 / 503';
		moreBtn.style.display = 'inline-block';
	});
}
else{
	moreBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		moreTextContainer.style.transform = 'translateY(0%)';
		moreBtn.style.display = 'none';
	});
	
	backBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		moreTextContainer.style.transform = 'translateY(100%)';
		moreBtn.style.display = 'inline-block';
	});
}

