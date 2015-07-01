
$(document).ready(function(){

     handleHighlighting();

});


var handleHighlighting = function(){

    var path = window.location.pathname;

    if (path.length > 0) {
        path = path.replace(/\/$/,"");
    }

    $('.nav a[href="'+ path +'"]').parent().addClass("active");

};
