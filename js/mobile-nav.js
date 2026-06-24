const burgerBtn = document.getElementById('burger-btn');
const burgerBtnClose = document.getElementById('burger-close-btn');
const mobileNav = document.querySelector('.mobile-nav-container');

burgerBtn.addEventListener('click', () => {
	mobileNav.classList.remove('hidden');
	burgerBtnClose.addEventListener('click', () => {
		mobileNav.classList.add('hidden');
		burgerBtnClose.removeEventListener('click', this);
	})
})