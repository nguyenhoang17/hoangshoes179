$(document).ready(function(){
 $('.slide_shopdetal').owlCarousel({
        dots:false,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:3
            },
            766:{
                items:3
            },
            992:{
                items:3
            }
        }
    })
  // $('.image_product1').owlCarousel({
  //       dots:false,
  //       loop:true,
  //       margin:10,
  //       nav:false,
  //       autoplay:true,
  //       items:1,
  //   })
 $('.rpbt').owlCarousel({
        dots:false,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            766:{
                items:2
            },
            992:{
                items:4
            }
        }
    })
  $('.more_logo_container').owlCarousel({
        autoplayTimeout:4000,
        dots:false,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            766:{
                items:4
            },
            992:{
                items:5
            }
        }
    })
    var li = $('.shopdetail_text_title ul li')
    li.eq(0).on('click',function(){
        $(this).addClass('li_active')
        $(this).siblings().removeClass('li_active')
        $('.shopdetail_text1').css({'display':'block'})
        $('.shopdetail_text2').css({'display':'none'})
        $('.shopdetail_text3').css({'display':'none'})
    })
     li.eq(1).on('click',function(){
        $(this).addClass('li_active')
        $(this).siblings().removeClass('li_active')
        $('.shopdetail_text2').css({'display':'block'})
        $('.shopdetail_text1').css({'display':'none'})
        $('.shopdetail_text3').css({'display':'none'})
    })
     li.eq(2).on('click',function(){
        $(this).addClass('li_active')
        $(this).siblings().removeClass('li_active')
        $('.shopdetail_text3').css({'display':'block'})
        $('.shopdetail_text1').css({'display':'none'})
        $('.shopdetail_text2').css({'display':'none'})
    })
      $('.rpbt_item').hover(function(){
        $('.rpbt_item_icon').addClass('animate__animated')
        $('.rpbt_item_icon').addClass('animate__fadeInUp')
    })
      $('.img_slide>img').on('click',function(){
        var src = $(this).attr('src')
        $('.img_pro>img').attr('src',src)
      })

})