(function() {
	'use strict';

	if ( document.querySelectorAll('.nav li._parent a') ) {
		const navParents = document.querySelectorAll('.nav li._parent a');

		navParents.forEach((item) => {
			item.addEventListener('click', (e)=> {
				e.preventDefault();

				let itemSrc = item.getAttribute('href');

				if ( document.querySelector(itemSrc) ) {
					document.querySelector(itemSrc).classList.toggle('_active');
				}
				item.closest('li').classList.toggle('_active');
			})
		});
	}

	if ( document.querySelector('.nav-mobile__list>li._parent>span') ) {
		const mobileListSpan = document.querySelectorAll('.nav-mobile__list>li._parent>span');

		mobileListSpan.forEach((item) => {
			item.addEventListener('click', () => {
				item.closest('li').classList.toggle('_active');
			});
		});
	}

	if ( document.querySelector('.header__mobile-burger') ) {
		const headerBurger = document.querySelector('.header__mobile-burger'),
			navMobileMain = document.querySelector('.nav-mobile._main');

		headerBurger.addEventListener('click', () => {
			navMobileMain.classList.toggle('_active');
		});
	}

	if ( document.querySelector('.nav-mobile__close') ) {
		const navMobileClose = document.querySelectorAll('.nav-mobile__close');

		navMobileClose.forEach((item) => {
			item.addEventListener('click', () => {
				item.closest('.nav-mobile').classList.remove('_active');
			});
		});
	}

	if ( document.querySelector('.nav-mobile__list>li>ul li span') ) {
		const navMobileSubSpan = document.querySelectorAll('.nav-mobile__list>li>ul li span');

		navMobileSubSpan.forEach((item) => {
			item.addEventListener('click', () => {
				let itemSrc = item.getAttribute('data-src');

				if ( document.querySelector(itemSrc) ) {
					document.querySelector(itemSrc).classList.toggle('_active');
				}
			});
		});
	}

	if ( document.querySelector('.gallery__carousel') ) {
		tns({
			container: document.querySelector('.gallery__carousel'),
			items: 1,
			loop: true,
			center: true,
			gutter: 30,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			fixedWidth: 827,
			nav: true,
			navContainer: document.querySelector('.gallery__dots'),
			controls: false,
			responsive: {
				0: {
					fixedWidth: 340,
					center: false,
					gutter: 10
				},
				575: {
					fixedWidth: 400,
					center: true
				},
				767: {
					fixedWidth: 500,
				},
				991: {
					fixedWidth: 700,
					gutter: 30
				},
				1199: {
					fixedWidth: 827
				}
			}
		});
	}

	if ( document.querySelector('.doctors-carousel__init') ) {
		tns({
			container: document.querySelector('.doctors-carousel__init'),
			items: 1,
			loop: true,
			gutter: 26,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			fixedWidth: 361,
			nav: false,
			controls: false,
			responsive: {
				0: {
					fixedWidth: 340,
					gutter: 10
				},
				991: {
					fixedWidth: 360,
					gutter: 26
				}
			}
		});
	}

	if ( (document.querySelector('.works-carousel__init')) && (document.querySelector('.works-carousel__thumbs')) ) {
		tns({
			container: document.querySelector('.works-carousel__init'),
			items: 1,
			loop: true,
			gutter: 10,
			mouseDrag: false,
			swipeAngle: false,
			touch: false,
			speed: 1000,
			controls: false,
			navAsThumbnails: true,
			navContainer: document.querySelector('.works-carousel__thumbs')
		});

		tns({
			container: document.querySelector('.works-carousel__thumbs'),
			items: 6,
			loop: true,
			gutter: 30,
			mouseDrag: true,
			swipeAngle: false,
			touch: false,
			speed: 1000,
			nav: true,
			navContainer: document.querySelector('.works-carousel__dots'),
			controls: false,
			responsive: {
				0: {
					fixedWidth: 340,
					gutter: 10
				},
				767: {
					fixedWidth: 380
				},
				991: {
					fixedWidth: false,
					items: 6,
					gutter: 30
				}
			}
		});
	}

	if ( (document.querySelector('.video-reviews-carousel__init')) && (document.querySelector('.video-reviews-carousel__thumbs')) ) {
		tns({
			container: document.querySelector('.video-reviews-carousel__init'),
			items: 1,
			loop: true,
			gutter: 10,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: true,
			controls: false,
			navAsThumbnails: true,
			navContainer: document.querySelector('.video-reviews-carousel__thumbs'),
			responsive: {
				0: {
					fixedWidth: 340
				},
				991: {
					fixedWidth: false
				}
			}
		});

		tns({
			container: document.querySelector('.video-reviews-carousel__thumbs'),
			items: 5,
			loop: true,
			gutter: 16,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: false
		});
	}

	window.addEventListener("DOMContentLoaded", () => {
		[].forEach.call( document.querySelectorAll('input[type="tel"]'), (input) => {
			let keyCode;

			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				let pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
						return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
				i = new_value.indexOf("_");
				if (i != -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				let reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type == "blur" && this.value.length < 5)  this.value = ""
			}

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
			input.addEventListener("keydown", mask, false);
		});
	});

	if ( document.querySelector('.footer__title span') ) {
		const footerControl = document.querySelectorAll('.footer__title span');

		footerControl.forEach((item) => {
			item.addEventListener('click', () => {
				item.closest('.footer__title').classList.toggle('_active');
			});
		});
	}

	if ( document.querySelector('.license__carousel') ) {
		tns({
			container: document.querySelector('.license__carousel'),
			items: 5,
			loop: false,
			gutter: 20,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: false,
			responsive: {
				0: {
					fixedWidth: 162,
					gutter: 5
				},
				991: {
					fixedWidth: false,
					gutter: 20
				}
			}
		});
	}

	const priceButtons = document.querySelectorAll('.price__button');

	if (priceButtons.length > 0) {
		priceButtons.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
			});
		});
	}

	const faqButtons = document.querySelectorAll('.faq__button');

	if (faqButtons.length > 0) {
		faqButtons.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
			});
		});
	}

	const tabLinks = document.querySelectorAll('.tabs__link'),
		tabContents = document.querySelectorAll('.tabs__content');

	if ( (tabLinks.length > 0) && (tabContents.length > 0) ) {
		tabLinks.forEach((tab) => {
			tab.addEventListener('click', () => {
				let tabItem = tab.getAttribute('data-item');

				tabLinks.forEach((item) => {
					item.classList.remove('_active');
				});

				tabContents.forEach((item) => {
					item.classList.remove('_active');

					item.getAttribute('data-item') === tabItem ? item.classList.add('_active') : '';
				});

				tab.classList.add('_active');
			});
		});
	}

	const choosesCurrent = document.querySelectorAll('.doctors__choose-current');

	if (choosesCurrent.length > 0) {
		choosesCurrent.forEach((chooseBtn) => {
			chooseBtn.addEventListener('click', (e) => {
				chooseBtn.classList.toggle('_active');

				e.stopPropagation();
			});
		});
	}

	const choosesRadios = document.querySelectorAll('.doctors__radios');

	if (choosesRadios.length > 0) {
		document.addEventListener('click', (e) => {
			choosesRadios.forEach((item)=> {
				if ( !item.contains(e.target) ) {
					item.closest('.doctors__choose').querySelector('.doctors__choose-current').classList.remove('_active');
				}
			});
		});
	}

	const choosesRadio = document.querySelectorAll('.doctors__radio input');

	if (choosesRadio.length > 0) {
		choosesRadio.forEach((item) => {
			item.addEventListener('change', () => {
				let itemBtn = item.closest('.doctors__choose').querySelector('.doctors__choose-current');

				itemBtn.classList.remove('_active');
				itemBtn.innerHTML = item.value;
			});
		});
	}

	const doctorLicense = document.querySelector('.doctor-license__init');

	if (doctorLicense) {
		tns({
			container: doctorLicense,
			loop: true,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: false,
			autoWidth: true,
			responsive: {
				0: {
					gutter: 15
				},
				991: {
					gutter: 24
				}
			}
		});
	}

	const doctorVideo = document.querySelector('.doctor-video__init');

	if (doctorVideo) {
		tns({
			container: doctorVideo,
			loop: true,
			items: 5,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: false,
			gutter: 16,
			responsive: {
				0: {
					gutter: 10,
					fixedWidth: 316
				},
				991: {
					gutter: 16,
					fixedWidth: false
				}
			}
		});
	}

	const similarCarousel = document.querySelector('.similar__init');

	if (similarCarousel) {
		tns({
			container: similarCarousel,
			loop: true,
			items: 3,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: false,
			responsive: {
				0: {
					gutter: 16,
					fixedWidth: 316
				},
				991: {
					gutter: 39,
					fixedWidth: false
				}
			}
		});
	}

	const textColsButtons = document.querySelectorAll('.text-cols__button');

	if (textColsButtons.length > 0) {
		textColsButtons.forEach((item) => {
			item.addEventListener('click', () => {
				let itemHidden = item.closest('.text-cols__text').querySelector('.text-cols__hidden');

				item.classList.contains('_active') ?
					item.innerHTML = item.getAttribute('data-more') : item.innerHTML = item.getAttribute('data-less');

				item.classList.toggle('_active');
				itemHidden.classList.toggle('_active');
			});
		});
	}

})();

$(document).ready(function() {
	$('.shtorka').twentytwenty({
		default_offset_pct: 0.35,
		no_overlay: true,
		move_with_handle_only: true
	});
});