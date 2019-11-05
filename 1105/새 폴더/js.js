$(document).ready(function(){
    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();

        if(scroll>0){
            $("#header").css({"background":"rgba(0,0,0,0.7"});
            $("#header>#gnb>li>a").css({"color":"#fff"});
        }else{
            $("#header").css({"background":"rgba(0,0,0,0)"});
            
            $("#header>#gnb>li>a").css({"color":"#333"});

            
        }
        
    })
    $("#header").on("mouseover",function(){
        $(this).css({"background":"rgba(0,0,0,0.7"});
        $("#header>#gnb>li>a").css({"color":"#fff"});
    });
    $("#header").on("mouseleave",function(){
        $(this).css({"background":"rgba(0,0,0,0.0"});
        $("#header>#gnb>li>a").css({"color":"#333"});
    });
})