
(function($){

$(document).ready(function(){

    handleHighlighting();

    setFirstGistSamplesToActive();

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

})(jQuery);
