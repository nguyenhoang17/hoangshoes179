$(document).ready(function(){
	$('#formDemo').validate({
		rules:{
			name: "required",
			email:{
				required: true,
				email:true
			},
			text:"required"
		}
	})
})