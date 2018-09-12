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
    var $input = $(".gm-web-search");
    $input.typeahead({
        source: [
            { id: "someId1", name: "Bariatric surgery" },
            { id: "someId2", name: "Robotic surgery" },
            { id: "someId3", name: "Dr. Bharath kumar " },
            { id: "someId4", name: "Vue.js Components" },
            { id: "someId5", name: "Native JavaScript" },
            { id: "someId6", name: "jQuery Plugins" },
            { id: "someId7", name: "Vanilla JavaScript" }
        ],
        templates: {
            empty: [
                '<div class="empty-message">',
                'unable to find any Best Picture winners that match the current query',
                '</div>'
            ].join('\n'),
            suggestion: function(data) {
                return '<p><strong>sss' + data.value + '</strong> – ' + data.year + '</p>';
            }
        },
    });

    $('select').selectpicker();    
    $('[data-toggle="tooltip"]').tooltip()
})();