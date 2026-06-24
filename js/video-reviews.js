const arrReviews = document.querySelectorAll('.review-slide');
const arrVideos = document.querySelectorAll('.video-container');


arrReviews.forEach((review, index) => {
    review.addEventListener('click', () => {
      arrVideos.forEach(video => video.classList.add('hidden'));
      arrVideos[index]?.classList.remove('hidden');
	const video = arrVideos[index]?.querySelector('video');
	    if (video) {
		  video.play();
		  video.currentTime = 0;
	    }
    });
});

arrVideos.forEach(container => {
	container.addEventListener('click', () => {
	    container.classList.add('hidden');
  
	    const video = container.querySelector('video');
	    if (video) {
		  video.pause();
		  video.currentTime = 0;
	    }
	});
  });