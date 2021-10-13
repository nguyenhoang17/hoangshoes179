$(document).ready(function(){
	$('.question').on('click', function(){
		$(this).find('span').toggle()
		$(this).siblings().slideToggle()
	})
})