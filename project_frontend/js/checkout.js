$(document).ready(function(){
		$('#formDemo').validate({
		rules:{
			f_name: "required",
			l_name: "required",
			company: "required",
			country:"required",
			street:"required",
			phone:"required",
			add:{
				required:true,
				minlength: 2
			},
			zip:{
				required:true,
				number:true
			},
			region:"required",

			email:{
				required: true,
				email:true
			},
			text:"required",

		}
	})
})