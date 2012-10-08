/*
 * jQuery Deep Scroll Plugin
 * Examples and documentation at: http://goo.gl/YhS7J
 * Developed by 2012 Francesco Caruccio
 * Version: 1.1 (25-SEP-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */

;(function($) {

    $.fn.deepTooltip = function(options) {

        var defaults = {
            activation:         'hover',
            animation:          null,
            speed:              null,
            delay:              null,
            width:              'auto',
            arrowElement:       'span',
            arrow:              'bottom'
        };

        $.extend(defaults, options);
        var $this = $(this);
        var $dTip = $('.deepTooltipInner', this);
        var $dTipHeight = $dTip.outerHeight();
        var $dTipWidth = $dTip.outerWidth();

        var $hCounter = 0;

        $('.deepTooltip').on('hover', function(){
            $hCounter++;
            $dTip.css({
                'width':            defaults.width
            });
            $this.on('mousemove', function(e){
                $dTip.css({
                    'left':         e.pageX,
                    'top':          e.pageY
                });
            });

            var html = '<' + defaults.arrowElement + ' class="' + defaults.arrow + '"></' + defaults.arrowElement +'>';
            var inner = $dTip[0];
            if($hCounter == 1){
                inner.innerHTML += html;
            }

            switch(defaults.animation) {
                default:
                    $dTip.toggle();
                    console.log('toggle');
                    break;
                case    'fade':
                    $dTip.fadeToggle(defaults.speed);
                    console.log('fade');
                    break;
                case    'slide':
                    $dTip.slideToggle(defaults.speed);
                    console.log('slide');
                    break;
            }

        });

    };

})($);