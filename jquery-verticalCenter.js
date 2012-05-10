(function($){
    $.fn.verticalCenter = function(){
        var element = this;

        $(element).ready(function(){
            changeCss();

            $(window).bind("resize", function(){
                changeCss();
            });

            function changeCss(){
                var elementHeight = element.height();
                var windowHeight = $(window).height();

                if(windowHeight > elementHeight)
                {
                    $(element).css({
                        "position" : 'absolute',
                        "top" : (windowHeight/2 - elementHeight/2) + "px",
                        "left" : 0 + "px",
                        'width' : '100%'
                    });
                }
            };
        });

    };
})(jQuery);