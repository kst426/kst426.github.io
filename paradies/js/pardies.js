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

    $('.mobutton').on("click",function(e){
        e.preventDefault();
        var is = $("#mopanel").hasClass("on");
        if(is){
            $('#mopanel').removeClass("on");
        }
        else{
            $('#mopanel').addClass("on");
        }
    });

    var $moGnb_li = $(".moGnb>li");
    $moGnb_li.on("click",function(e){
        e.preventDefault();
        var isOn = $(this).children("a").hasClass("on");
        if(isOn){
            $(this).childrent("a").removeClass("on");
        }
        else{
            $moGnb_li.children("a").removeClass("on");
            $moGnb_li.children(".sub1").stop().slideUp();
            $(this).children("a").addClass("on");
            $(this).children(".sub1").stop().slideDown();
        }

    });
    $(window).resize(function(){
        var width_size = window.outerWidth;
        if(width_size>= 600){
            
            $("#mopanel").css({"display":"none"});
        }else{
            $("#mopanel").css({"display":"block"})
        }
    });

    var visual = $(".visualWrap");
    var slider = visual.find(">div");
    var button = $(".buttonlist>li");
    var current = 0 ;
    timer();

    button.on("click",function(){
        var tt = $(this);
        var i = tt.index();
        button.removeClass("on");
        tt.addClass("on");
        move(i);
    });
    function move(i){
        var currentE1 = slider.eq(current);
        var next = slider.eq(i);
        currentE1.css({"left":0}).animate({left:"-100%"});
        next.css({"left":"100%"}).animate({"left":0});
        current = i;
    }
    function timer(){
        setInterval(function(){
            var n = current+1;
            if(n == slider.size()){
                n = 0;
            }
            button.eq(n).trigger("click");

        },3000);
    }


    /*
    var visual = $(".visualWrap");
    var slider = visual.find(">div");
    var slideCount = slider.size();
    var current = 0;
    function showNext(){
        var nextIndex = (current+1)%slideCount;
        slider.eq(current).css({"left":0}).animate({left:"-100%"});
        slider.eq(nextIndex).css({"left":"100%"}).animate({"left":0});
        current = nextIndex;
    }
    setInterval(showNext,3000);
    
    */






   
});