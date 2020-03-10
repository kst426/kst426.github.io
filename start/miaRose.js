$(document).ready(function(){
    $(".menu>li").on("mouseover",function(){
        $(this).children(".sub").stop().slideDown();
        $(this).children("a").addClass("on");
    
    });
    $(".menu>li").on("mouseleave",function(){
        $(this).children(".sub").stop().slideUp();
        $(this).children("a").removeClass("on");
    });
    
    $("#header>i").on("click",function(){
        var is = $("#moGnb").hasClass("on");
        if(is){
            $("#moGnb").removeClass("on");
        }else{
            $("#moGnb").addClass("on");
        }
    })
    
    

})