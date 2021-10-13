$(document).ready(function(){
	$('.cart_plus').on('click',function(e){
		var plus_value = $(this).siblings('input').val();
		var value = parseInt(plus_value);

		if(value<999){
			value++;
			$(this).siblings('input').val(value);
		}
	})
	$('.cart_minus').on('click',function(e){
		var plus_value = $(this).siblings('input').val();
		var value = parseInt(plus_value);

		if(value>1){
			value--;
			$(this).siblings('input').val(value);
		}
	})
	 $('#cartform_left').validate({
        rules: {
            country:"required",
            region:"required",
            zip:"required"
        }

    })
	  $('#cartform_center').validate({
        rules: {
            code:"required",
           
        }

    })
})
