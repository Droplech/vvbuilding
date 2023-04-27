$('.typesWork_item').click(function(){
    // e.preventDefault()
    $('.typesWork_popUp').fadeIn()
    // $('.popUp_content').fadeIn()
    $('.typesWork_item').removeClass('directions_item-active')
    $(this).addClass('directions_item-active')
    $('.popUp_content').removeClass('popUp_content_active')
    $( $(this).attr('data-tab') ).addClass('popUp_content_active')
})



$('.typesWork_popUp').click(function(){
    $('.typesWork_popUp').fadeOut()
    $('.popUp_content').removeClass('popUp_content_active')
   
    
})

// $('.rus_text').fadeOut()
$('.ukr_text').addClass('text_active');
$('.ukr_lang').addClass('lang_hover')
$('.ukr_lang').click(function(){
    $('.ukr_lang').addClass('lang_hover')
    $('.rus_lang').removeClass('lang_hover')
    $('body').addClass('ukrlang_acitve')
    $('body').removeClass('ruslang_acitve')
    if ($('body').hasClass('ukrlang_acitve')) {
        $('.ukr_text').addClass('text_active');
        $('.rus_text').removeClass('text_active');
    }
})

$('.rus_lang').click(function(){
    $('.rus_lang').addClass('lang_hover')
    $('.ukr_lang').removeClass('lang_hover')
    $('body').addClass('ruslang_acitve')
    $('body').removeClass('ukrlang_acitve')
    if ($('body').hasClass('ruslang_acitve')) {
        $('.rus_text').addClass('text_active');
        $('.ukr_text').removeClass('text_active');
        
    }
})

$(document).ready(function(){
    // = Вешаем событие прокрутки к нужному месту
    	//	 на все ссылки якорь которых начинается на #
    	$('a[href^="#"]').bind('click.smoothscroll',function () {
            
    
    		var target = this.hash,
    		$target = $(target);
    
    		$('html, body').stop().animate({
    			'scrollTop': $target.offset().top - 70
    		}, 800, 'swing', function () {
    			window.location.hash = target;
    		});
    	});
    
    });


$('.menu_item a').click(function(){
    $('body').removeClass('open_main_menu')
    $('body').removeClass('flow')
    
})
// $('.gamb').click(function(){
//     $('body').addClass('open_main_menu, .flow')
// })

