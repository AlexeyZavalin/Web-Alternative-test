$(document).ready(function() {
	if ($(window).width() < 701) {
			$('.catalog__item_link').addClass('trigger');
		}
	$(window).resize(function() {
		if ($(this).width() < 701) {
			$('.catalog__item_link').addClass('trigger');
		}
		else {
			$('.catalog__item_link').removeClass('trigger');
		}
	})	
	$('.trigger').on ('click', function(e) {
		e.preventDefault();
		var $this = $(this),
		item = $this.closest('.catalog__item'),
		list = $this.closest('.catalog')
		items = list.find('.catalog__item'),
		sublist = item.find('.catalog__sub'),
		otherContent = list.find('.catalog__sub'),
		duration = 300;

		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');
			otherContent.stop(true,true).slideUp(duration);
			sublist.stop(true,true).slideDown(duration);
		}		
		else {
			sublist.stop(true,true).slideUp(duration);
			item.removeClass('active');
		}	
	});
});