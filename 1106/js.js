$(document).ready(function(){
    $(".next").on("click",function(e){
        e.preventDefault();
        $(".box2>ul>li").stop().animate({"margin-left":"-50%"},500,function(){
            $("box2>ul>li").first().appendTo("box2>ul");
            $("box2>ul>li").css({"margin-left:"})
        })

        $(".box2>ul>li").first().append()


    })
    $(".prev").on("click",function(e){
        e.preventDefault();
        
    })
})