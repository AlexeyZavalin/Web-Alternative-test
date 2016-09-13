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