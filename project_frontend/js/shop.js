$(document).ready(function(){

     $('.tcbt_item').hover(function(){
        $('.tcbt_item_icon').addClass('animate__animated')
        $('.tcbt_item_icon').addClass('animate__fadeInUp')
    })
    $('.npbt_item').hover(function(){
        $('.npbt_item_icon').addClass('animate__animated')
        $('.npbt_item_icon').addClass('animate__fadeInUp')
    })
    $('.list_bar').on('click',function(){
    	$(this).next().css({'color':'#dddddd'})
    	$(this).css({'color':'#000000'})
    	$('.list_shop1').css({'display':'flex'})
    	$('.list_shop2').css({'display':'none'})
    })
     $('.list_ol').on('click',function(){
    	$(this).prev().css({'color':'#dddddd'})
    	$(this).css({'color':'#000000'})
    	$('.list_shop2').css({'display':'flex'})
    	$('.list_shop1').css({'display':'none'})
    })
    


})