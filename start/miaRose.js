$(document).ready(function(){
    $(".menu>li").on("mouseover",function(){
        $(this).children(".sub").stop().slideDown();
        $(this).children("a").addClass("on");
    
    });
    $(".menu>li").on("mouseleave",function(){
        $(this).children(".sub").stop().slideUp();
        $(this).children("a").removeClass("on");
    });
    
    $("#header>i").on("click",function(e){
        e.preventDefault();
        var is = $("#moGnb").hasClass("on");
        if(is){
            $("#moGnb").removeClass("on");
        }else{
            $("#moGnb").addClass("on");
        }
    });
    var $menu_li = $(".momenu>li");

    $menu_li.on("click",function(e){
        e.preventDefault();
        var isOn = $(this).children("a").hasClass("on");
        if(isOn){
            $(this).children("a").removeClass("on");
            $(this).children(".sub1").stop().slideUp();
        }else{
            $menu_li.children("a").removeClass("on");
            $menu_li.children(".sub1").stop().slideUp();
            $(this).children("a").addClass("on");
            $(this).children(".sub1").stop().slideDown();
        }
    });
    $(window).resize(function(){
        var width_size = window.outerWidth;
        if(width_size>=577){
            $("#moGnb").css({"display":"none"});

        }else{
            $("#moGnb").css({"display":"block"})
        }
    })
    

})