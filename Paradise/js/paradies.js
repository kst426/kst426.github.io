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
            $("#moPanel").css({"display":"none"});
        }else{
            $("#moPanel").css({"display":"block"});
        }
    });

    var $moGnb_li = $("#moGnb>li");
    $moGnb_li.on("click",function(e){
        e.preventDefault();

        var isOn = $(this).children("a").hasClass("on");
        if(isOn){
            $(this).children("a").removeClass("on");
            
        }else{
            $moGnb_li.children("a").removeClass("on");
            $moGnb_li.children(".sub1").stop().slideUp();    
            $(this).children("a").addClass("on");
            $(this).children(".sub1").stop().slideDown();

        }


    });

    var visual = $("#VisualWrap>ul>li");
    var button = $("#buttonlist>li");
    var current = 0;
    timer();

    button.on("click",function(){
        var tt = $(this);
        var i = tt.index();

        button.removeClass("on");
        tt.addClass("on");
        move(i);


    })
    function move(i){
        var currentE1 = visual.eq(current);
        var next = visual.eq(i);
        currentE1.css({"left":0}).animate({left : "-100%"});
        next.css("left","100%").animate({left:0});
        current = i;
    }
    function timer(){
        setInterval(function(){
            var n = current+1;
        if(n == visual.size()){
            n = 0;
        }
        button.eq(n).trigger("click");
        },3000);
        

    }
/*
$(document).ready(function(){
    var slideImg = $(".slideImg");
    var slider = slideImg.find(">div");
    var currentIndex = 0;
    var slides = slider.size();
    
    function showNext(){
        var nextIndex = (currentIndex+1)%slides;
        slider.eq(currentIndex).fadeOut(800);
        slider.eq(nextIndex).fadeIn(800);
        currentIndex = nextIndex;
    }
    setInterval(showNext,3000);
    
});
*/
    
});

