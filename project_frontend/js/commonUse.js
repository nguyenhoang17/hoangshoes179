$(document).ready(function(){
	$('.header__bottom__container_left button').on('click',function(){
        $('.list_category').slideToggle(300)
    })
     $('.bar').on('click',function(){
        $('.menu_responsive').fadeIn()
        $('.menu__responsive__container').removeClass('animate__slideOutLeft')
        $('.menu__responsive__container').addClass('animate__slideInLeft')
        var vHeight = $('body').height()
        $('.menu_responsive').css({'height':vHeight})
    })
    $('.close').on('click',function(){
        $('.menu_responsive').fadeOut()
        $('.menu__responsive__container').removeClass('animate__slideInLeft')
        $('.menu__responsive__container').addClass('animate__slideOutLeft')
    })
    $('.plus').on('click',function(){
        $(this).css({'display':'none'})
        $(this).next().css({'display':'inline-block'})
        $(this).siblings('ul').slideToggle()
    })
    $('.minus').on('click',function(){
        $(this).css({'display':'none'})
        $(this).prev().css({'display':'inline-block'})
        $(this).siblings('ul').slideToggle()
    })
        $(window).on('scroll',function(){
        if($(this).scrollTop()>=300){
            $('.back-to-top').css({'display':'block'})
            $('.back-to-top').fadeIn(300)
        }
        else{
            $('.back-to-top').fadeOut(300)
        }
    })
    $('.back-to-top').on('click', function(){
        $('html').animate({
            scrollTop :0
        },500)
    })
})