$(document).ready(function(){
    $(".menu>li").on("mouseover",function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".menu>li").on("mouseleave",function(){
        $(this).children(".sub").stop().slideUp();
    });

    $(".btn").on("click",function(e){
        e.preventDefault();
        var is = $("#moPanel").hasClass("on");
        if(is){
            $("#moPanel").removeClass("on");
        }else{
            $("#moPanel").addClass("on");
        }
    });

    $(window).resize(function(){
        var width_size = window.outerWidth;
        if(width_size>=577){
            $("#moPanel").css({"display":"none"})
        }else{
            $("#moPanel").css({"display":"none"});
        }
    })

    var $moGnb_li = $("#moGnb>li");
    $moGnb_li.on("click",function(e){
        e.preventDefault();
        var isOn = $(this).children("a").hasClass("on");
        if(isOn){
            $(this).children("a").removeClass("on");
            $(this).children(".sub1").stop().slideUp();
        }else{
            $moGnb_li.children("a").removeClass("on");
            $moGnb_li.children(".sub1").stop().slideUp();
            $(this).children("a").addClass("on");
            $(this).children(".sub1").stop().slideDown();
        }
    })

})