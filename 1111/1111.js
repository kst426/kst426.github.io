$(document).ready(function(){

    var x_now = parseInt($(".box1").css('left'));
    var y_now = parseInt($(".box1").css('top'));
    
    $("#box").on("mousemove",function(e){
        var x = e.pageX/20;
        var y = e.pageY/20;
        $("h1").text(x);
        $("h2").text(y);

        $(".box1").css({"left":x_now-x,"top":y_now-y});
    })



})