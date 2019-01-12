(function() {

    $(window).on('load', function() {
            $('[data-toggle="chat"]').on('click',function(){
                var $this= $(this);
                $('.ed-join,.ed-content').removeClass('active');
                $this.addClass('active');
                $('#'+$this.attr('target')).addClass('active');
            })
            $('select').select2({minimumResultsForSearch: -1});

            //.modal script
            $('body').on('click','[data-toggle="modal"]',function(){
                var $target = $($(this).attr('data-target'));
                $target.fadeIn(500,function(){
                    $target.addClass('in');
                })
            })
            $('body').on('click','[data-dismiss="modal"]',function(){
                var target = $(this).attr('data-target');
                dismissModal(target)
            })

            function dismissModal(target){
                $(target).removeClass('in').fadeOut(500);
            }
    })
    
})();