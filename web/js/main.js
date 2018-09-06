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
    })
})();