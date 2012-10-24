/*
 * jQuery Deep Scroll Plugin
 * Examples and documentation at: http://goo.gl/YhS7J
 * Developed by 2012 Francesco Caruccio
 * Version: 1.1 (08-OCT-2012)
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
            width:              200,
            arrowElement:       'span',
            arrow:              'bottom',
            followCursor:       false
        };

        $.extend(defaults, options);
        var $this = $(this);
        var $hCounter = 0;

        $(this).on('hover', function(){
            var $dTip = $('.deepTooltipInner', this);
            $hCounter++;
            $dTip.css({
                'width':            defaults.width
            });
            var $dTipOWidth = $dTip.outerWidth(true);
            var $dTipOHeight = $dTip.outerHeight(true);

            if(!$(this).children('.deepTooltipInner').children('span').length > 0){
                var html = '<' + defaults.arrowElement + ' class="deepArrow' + defaults.arrow + '"></' + defaults.arrowElement +'>';
                var inner = $dTip[0];
                inner.innerHTML += html;
            }

            if(defaults.followCursor == true){

                $this.on('mousemove', function(e){

                    if($dTipOHeight > e.pageY){
                        $dTip.css({
                            'top':          e.pageY+30
                        });
                    }
                    else{
                        $dTip.css({
                            'top':          e.pageY-($dTipOHeight+30)
                        });
                    }
                    if($dTipOWidth/2 > e.pageX){
                        $dTip.css({
                            'left':          e.pageX+30
                        });
                    }
                    else{
                        $dTip.css({
                            'left':          e.pageX-($dTipOWidth/2)
                        });
                    }
                });

            }
            else{
                $(this).css({
                    position:       'relative'
                });
                $dTip.css({
                    bottom:             $(this).outerHeight()+$(this).find('> span > span').outerHeight(),
                    marginLeft:         -($dTip.outerWidth()-$(this).outerWidth())/2
                });
            }

            switch(defaults.animation) {
                default:
                    $dTip.stop(true,true).toggle(defaults.speed);
                    break;
                case    'fade':
                    $dTip.stop(true,true).fadeToggle(defaults.speed);
                    break;
                case    'slide':
                    $dTip.stop(true,true).slideToggle(defaults.speed);
                    break;
            }

        });

    };

})($);