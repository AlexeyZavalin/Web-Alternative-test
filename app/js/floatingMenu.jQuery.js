(function($) {
	$.fn.floating = function(options) {
		var settings = $.extend({
			'color' : '#fff',
			'shadow' : '0px 5px 8px 0 #dddddd'
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