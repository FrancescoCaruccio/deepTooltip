/*
 * jQuery Deep Scroll Plugin
 * Examples and documentation at: http://goo.gl/YhS7J
 * Developed by 2012 Francesco Caruccio
 * Version: 1.1 (25-SEP-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 *
 * TODO: ero arrivato a
 * http://www.consulenza-web.com/2012/01/struttura-di-un-plugin-jquery/
 * "Rispondere ai diversi tipi di input"
 *
 */

;(function( $ ) {

    var __loop = function() {

        $(this).fadeOut().fadeIn();

    };

    $.fn.deepTooltip = function() {

        // Proprietà di configurazione interna.
        var cfg = false;

        // Estendo la proprietà di configurazione con l'oggetto di
        // configurazione contenuto nel primo parametro del plugin.
        if ( !arguments.length || $.isPlainObject(arguments[0]) ) {

            cfg = $.extend({},{
                color: 'black'
            },arguments[0]);

            fra = {
                position:   'fixed'
            }

            $.extend(cfg, fra);

        }

        console.log(cfg);

        $(this).each(__loop,[cfg]);

        return this;

    };

})( jQuery );