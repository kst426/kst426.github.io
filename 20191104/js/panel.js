$(document).ready(function(){

    $(".btn>li").on("click",function(e){
        e.preventDefault();
        
        $(".btn>li").children("a").removeClass("on");
        $(this).children("a").addClass("on");

        
        var x = $(this).index();
        show(x);


    });
    function show(index){
        $(".panel>li").removeClass("on");
        $(".panel>li").eq(index).addClass("on");
    }





})