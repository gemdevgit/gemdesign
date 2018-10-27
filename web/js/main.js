(function() {

    $(window).on('load', function() {
        $('.gm-toggle-login').on('click', function() {
            if ($(this).hasClass('active')) {

                $('.gm-toggle-login').removeClass('active');
                $('.gm-login-wrapper').removeClass('active');
            } else {
                $('.gm-toggle-login').addClass('active');
                $('.gm-login-wrapper').addClass('active');
            }
        });
        $('.gm-toggle-search').on('click', function() {
            if ($(this).hasClass('active')) {

                $('.gm-toggle-search,.gm-search-wrapper').removeClass('active');
            } else {
                $('.gm-toggle-search,.gm-search-wrapper').addClass('active');
            }
        });


    })
    
})();