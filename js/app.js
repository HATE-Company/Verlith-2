const swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	speed: 600,
	
 	autoplay: {
		delay: 3000,
 	},
	
	coverflowEffect: {
		rotate: 35,
		stretch: 0,
		depth: 150,
		modifier: 1,
		slideShadows: false,
	},
	
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		560: {
			slidesPerView: 3,
		},
		990: {
			slidesPerView: 4,
		}
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
