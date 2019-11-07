$(document).ready(function(){

    $(".next").on("click",function(e){
        e.preventDefault();
        $(".pan1").stop().animate({"margin-left":"-100%"},500,function(){
            $(".pan1>li").first().appendTo(".pan1");
            $(".pan1").css({"margin-left":"0%"});
        })
        $(".pan2").animate({"margin-left":"-50%"},500,function(){
            $(".pan2>li").first().appendTo(".pan2");
            $(".pan2").css({"margin-left":"0%"});
            $(".pan2>li").removeClass("on");
            $(".pan2>li").first().addClass("on");
        })



    });
    $(".prev").on("click",function(e){
        e.preventDefault();
        $(".pan1>li").last().prependTo(".pan1");
        $(".pan1").css({"margin-left":"-100%"});
        $(".pan1").stop().animate({"margin-left":"0"},500,function(){
            
            
        });
        $(".pan2>li").last().prependTo(".pan2");
        $(".pan2").css({"margin-left":"-50%"});

        $(".pan2").stop().animate({"margin-left":"0%"},500,function(){
            
            $(".pan2>li").removeClass("on");
            $(".pan2>li").first().addClass("on");

        })
    })





})