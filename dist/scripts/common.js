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
$(document).ready(function() {
	$('.letter a').on ('click', function() {
		var letter = $(this).data('letter'),
				list= $('.list[data-letter="'+ letter + '"]'),
				lists = list.siblings();
				lists.css('display','none');
				list.css('display','block')
					.find('.list__items').children('.list__item').css('text-align','center');
				list.find('.list__title').css('display', 'none');
				console.log(parseInt(list.children(), 10));
				$('.brands__lists').css({
					'column-count': parseInt(list.find('.list__item').length/4, 10)
				});
				$(this).css({
					'color': '#ff4081',
					'text-decoration':'underline'
				}).closest('.letter').siblings().children('a').removeAttr('style');				
	});
});
(function($) {
	$.fn.floating = function(options) {
		var settings = $.extend({
			'color' : '#fff',
			'shadow' : '0px 4px 6px 0 #dddddd'
		}, options);
		return this.each(function() {
			var ths = $(this);
			var distance = ths.offset().top,
			heightPlace = ths.height(),
			widthThs = ths.width(),
			distanceLeft = ths.offset().left;
			ths.wrapInner('<div class="clinged">')
			.prepend('<div class="placeholder">');
			function clingInit() {
				$('.clinged').css({
					'position': 'fixed',
					'top': '0',
					'width': widthThs,
					'left': distanceLeft,
					'z-index': '99999',
					'background-color': settings.color,
					'box-shadow': settings.shadow
				}).find('.basket__ico').css({
					'transform':'scale(0.75)'
				});
				$('.placeholder').css({
					'height': heightPlace +'px',
					'width': widthThs + 'px'
				});
			}
			$(window).scroll (function () {
				if ($(this).scrollTop() >= distance && $(this).width() > 980) {
					clingInit();
				}
				else {
					$('.clinged').removeAttr('style').find('.basket__ico').removeAttr('style');
					$('.placeholder').removeAttr('style');
				}
			});
			$(window).resize (function() {
				distance = ths.offset().top,
				heightPlace = ths.height(),
				widthThs = ths.width();
			});
		});
	};
})(jQuery);