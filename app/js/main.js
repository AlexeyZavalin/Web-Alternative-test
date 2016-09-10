$(document).ready(function() {
	$('.button_catalog .button__link').on ('click', function() {
		$('.catalog').slideToggle(400);
	});
	$('.menu_button').on ('click', function() {
		$('.header__items').slideToggle();
	});
	$(window).resize(function() {
		$('.header__items').removeAttr('style');
	});
	$('.floating').floating();
});