(function() {

    $(window).on('load', function() {
            $('[data-toggle="chat"]').on('click',function(){
                var $this= $(this);
                $('.ed-join,.ed-content').removeClass('active');
                $this.addClass('active');
                $('#'+$this.attr('target')).addClass('active');
            })

            $('.ed-timer-blue').final_countdown({
                'start': 1546679960,
                'end': 1546906639,
                'now': 1546874408,
                selectors: {
                    value_seconds: '.clock-seconds',
                    canvas_seconds: 'canvas-seconds',
                    value_minutes: '.clock-minutes',
                    canvas_minutes: 'canvas-minutes',
                    value_hours: '.clock-hours',
                    canvas_hours: 'canvas-hours',
                    value_days: '.clock-days',
                    canvas_days: 'canvas-days'

                }        
            });
    })
    
})();