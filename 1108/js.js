$(document).ready(function(){

    $(".list>li").on("mouseover",function(){
        $(".bgPanel").stop().slideDown();
        
    });

    $(".bgPanel").on("mouseleave",function(){
        $(".bgPanel").stop().slideUp();
        
    });
    
    showslide(0);
    var total = $("#Visual li").length;

    $(".next").on("click",function(e){
        e.preventDefault();
        if(currentIndex == total - 1){
            currentIndex = 0;
        }else{
            currentIndex++;
        }
        showslide(currentIndex);
    })

    $(".prev").on("click",function(e){
        e.preventDefault();
        if(currentIndex == 0){
            currentIndex = total -1;
        }else{
            currentIndex--;
        }
        showslide(currentIndex);
    });

    $(".btn1>li").on("click",function(e){
        e.preventDefault();
        var x = $(this).index();
        showslide(x);


    })
    function showslide(index){
        $(".btn1>li").removeClass("on");
        $(".btn1>li").eq(index).addClass("on");
        
        $("#Visual>div").fadeOut().removeClass("on");
        $("#Visual>div").eq(index).fadeIn().addClass("on");
        currentIndex = index;
    }

    $(".glist>li").on("click",function(e){
		e.preventDefault();
		$(".glist>li").removeClass("on");
		$(".gimg>div").removeClass("on");
		$(this).addClass("on");
		var x = $(this).index();
		$(".gimg>div").eq(x).addClass("on");
    });
    
    $(".btn").on("click",function(e){
        e.preventDefault();
        $(".top").animate({"width":"100%"},500,function(){
            $(".right").animate({"height":"100%"},500,function(){
                $(".bottom").animate({"width":"100%"},500,function(){
                    $(".left").animate({"height":"100%"},500,function(){
                        $(".Mimg").css({"background":"url(img/con4.jpeg)no-repeat","background-size":"cover"})
                    });
                });
            })
        })
    })

 

})