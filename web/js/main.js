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

            $(document).mouseup(function (e) {
                var container = $(".modal-dialog"); // YOUR CONTAINER SELECTOR

                if (!container.is(e.target) // if the target of the click isn't the container...
                    && container.has(e.target).length === 0) // ... nor a descendant of the container
                {
                    if(e.target.className == "modal-backdrop"){
                        var target = $(e.target.parentElement).attr('id');
                        dismissModal('#'+target)
                    }
                }
            });
            function dismissModal(target){
                $(target).removeClass('in').fadeOut(500);
            }
    })
    
})();