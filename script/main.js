
(function($){

$(document).ready(function(){

    handleHighlighting();

    setFirstGistSamplesToActive();

    setupMenuButton();

});


var handleHighlighting = function(){

    var path = window.location.pathname;

    if (path.length > 0) {
        path = path.replace(/\/$/,"");
    }

    $('.main-nav .nav a[href="'+ path +'"]').parent().addClass("active");

};

var setFirstGistSamplesToActive = function(){

    $(".code-sample ul").find("li:eq(0) a").click();

};

var setupMenuButton = function(){

    $(".sidebar").on("click", "a", function(){

        $(".sidebar").toggle();

    });


    $(".menuButton").click(function(){

        $(".sidebar").toggle();

    });

};


})(jQuery);
