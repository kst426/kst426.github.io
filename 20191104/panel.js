$(document).ready(function(){

    $(".btn>li").on("click",function(e){
        e.preventDefault();
        
        $(".btn>li").removeClass("on");
        $(this).children("a").addClass("on");

        $(".panel").removeClass("on");
        var x = $(this).index();
        show(x);


    });
    function show(index){
        $(".panel>li").eq(index).addClass("on");
    }





})