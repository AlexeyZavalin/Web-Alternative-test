$(document).ready(function() {
	$('.button_catalog .button__link').on ('click', function() {
		$('.catalog').slideToggle(400);
	});
	$(window).resize(function() {
		$('.header__items').removeAttr('style');
	});
	$('.floating').floating();
	$('.menu_button').on ('click', function(e) {
		e.preventDefault();
		$('.header__items').slideToggle(300);
		$(this).find('svg').toggleClass('active');
		sublist.stop(true,true).slideUp(duration);
			item.removeClass('active');
	});
});