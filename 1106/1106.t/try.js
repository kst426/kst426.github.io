$(document).ready(function(){
    $("#.list>li").on("click",function(){
        $("li").removeClass("on");
        
        var x = $(this).index();
        $(this).addClass("on");
        $(".pic>li").eq(x).addClass("on");
        $(".title>li").eq(x).addClass("on");
    })
})