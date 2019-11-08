$(document).ready(function(){

    $(".list").on("mouseover",function(){
        $(".panel").stop().slideDown();
    });

    $(".panel").on("mouseleave",function(){
        $(".panel").stop().slideUp();
    });
 

})