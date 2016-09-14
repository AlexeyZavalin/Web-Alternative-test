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
			'column-count': parseInt(list.find('.list__item').length/3,10)
		});
		console.log(list.find('.list__item').length + parseInt($(window).width()/100,10));
		$(this).css({
			'color': '#ff4081',
			'text-decoration':'underline'
		}).closest('.letter').siblings().children('a').removeAttr('style');				
	});
});
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