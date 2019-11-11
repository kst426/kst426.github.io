$(document).ready(function(){

    $(".list").on("mouseover",function(){
        $(".panel").stop().slideDown();
    });

    $(".panel").on("mouseleave",function(){
        $(".panel").stop().slideUp();
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
 

})