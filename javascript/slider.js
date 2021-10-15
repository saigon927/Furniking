$(document).ready(function () {
	$(".main-screen-bottom__slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000
	});
});
$(document).ready(function () {
	$(".reviews__slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 915,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});
})