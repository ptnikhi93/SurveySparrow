var res;
$(window).scrollTop(0)
$(window).on("resize", function (a) {
    a.preventDefault();
    if (res) {
        clearTimeout(res)
    }
    res = setTimeout(function () {

        $('header nav').removeAttr('style')
        if($(window).width() < 1024){
            $('header nav').css('top',$('header').outerHeight())
        }
        
    }, 100)   
}).trigger('resize');

$(window).scroll(function () {
    scrolTop = $(this).scrollTop()
    if (scrolTop > 25) {
        $('header').addClass('act');
                 
    } else if(scrolTop==0){
        $('header').removeClass('act');
       
    }
  
}).trigger('scroll');


$('header .menu').on('click',function(){
    $(this).toggleClass('act')
    $('header nav').slideToggle()
})

$('.chat-icon').on('click',function(e){
    $(this).toggleClass('active')
    $('.chat-box').slideToggle()
})
$('.chat-box .start-btn').on('click',function(e){
    $('.chat-box').addClass('active  ')
    $(this).parents('.chat-body').find('.cont').hide()
    $('.chat-box form').show()
    $('.chat-panel').show()
})

