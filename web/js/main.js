(function() {

    $(window).on('load', function() {
            $('[data-toggle="chat"]').on('click',function(){
                var $this= $(this);
                $('.ed-join,.ed-content').removeClass('active');
                $this.addClass('active');
                $('#'+$this.attr('target')).addClass('active');
            })

    })
    
})();