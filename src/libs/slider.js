require("slick-carousel");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const $ = require("jquery");

function setSlider() {
	const width = document.documentElement.clientWidth;

	if (width >= 860) {
		if ($(".services-block__feat-wrap").hasClass('slick-initialized')) {
			$(".services-block__feat-wrap").slick('unslick');
		}

		$(".testimonials-block__comm-items").not('.slick-initialized').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			centerMode: false,
			variableWidth: false,
			prevArrow: '.testimonials-block__comm-btn-left',
			nextArrow: '.testimonials-block__comm-btn-right',

		});
	
	} else if (width >= 560) {
		$(".testimonials-block__comm-items").not('.slick-initialized').slick({
			slidesToShow: 1,
			slidesToScroll: 1
		});
	} else {
		$(".services-block__feat-wrap").not('.slick-initialized').slick({
			infinite: true,
			speed: 300,
			infinite: true,
			centerMode: true,
			dots: true,
			arrows: false,
			variableWidth: true
		});
	}

	
}

document.addEventListener("DOMContentLoaded", setSlider);

window.addEventListener("resize", setSlider);



//* Testimonials slider


$(".testimonials-block__comm-items").not('.slick-initialized').slick({
	infinite: true,
	speed: 300,
	infinite: true,
	centerMode: true,
	dots: true,
	variableWidth: true,
	prevArrow: '.testimonials-block__comm-btn-left',
	nextArrow: '.testimonials-block__comm-btn-right',
});

