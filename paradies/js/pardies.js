$(document).ready(function(){

    var i = $(".u>li");

    $('.u>li').on("mouseover",function(){
        $(this).children('.sub').stop().slideDown();
        $(this).children('a').addClass("on");
        

        
    });
    $('.u>li').on("mouseleave",function(){
        $(this).children('.sub').stop().slideUp();
        $(this).children('a').removeClass("on");
    });
});