$(document).ready(function(){
	$('#header .top-bar .phone-box a.btn').on('click', function(){
		$('.overlay').fadeIn();
		$('.popup').fadeIn();
		return false;
	})
	$('.popup .close, .overlay').on('click', function(){
		$('.overlay').fadeOut();
		$('.popup').fadeOut();
	})
})