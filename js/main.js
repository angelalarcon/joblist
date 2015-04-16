$(document).ready(function(){

	$('.square').click(function() {
		$(this).addClass('open');
	});
	
	$('.square-close').click(function() {
		$('.square').removeClass('open');
	});
});