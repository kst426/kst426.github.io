$(document).ready(function(){

    $(".btn>li").on("click",function(){
        
        

        var x= $(this).index();
        $("li").removeClass("on");
        $("div").removeClass("on");
        $(".btn>li").eq(x).addClass("on");
        $(".boxes>div").eq(x).addClass("on");
        $(".num>li").eq(x).addClass("on");

    });



});