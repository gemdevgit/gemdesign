$(document).ready(function(){
    $('.search-btn').on('click',function(){
        $('.search-box').slideToggle();
    })
    
    $('input.searchTxt').focus(function() {
        $(this).attr('placeholder', '')
    }).blur(function() {
        $(this).attr('placeholder', 'Type your search here...')
    })    
    
    
    $('.multi-item-carousel .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) next = $(this).siblings(':first');
  next.children(':first-child').clone().appendTo($(this));
});
$('.multi-item-carousel .carousel-item').each(function(){
  var prev = $(this).prev();
  if (!prev.length) prev = $(this).siblings(':last');
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});
    
$('.course-info-more').on('click',function(){
    $('span.vm').hide();
})
 
    // start of media query condition for script
    if($(window).width() <= 992){ 

    $('.search-btn').on('click',function(){
        $('.collapse').removeClass('show');
    })
    $('.main-mobilemenu').on('click',function(){
        $('.search-box').hide();
    })        
        
    } // end of media query condition for script
    
})
