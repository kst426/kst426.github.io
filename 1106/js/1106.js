$(document).ready(function(){
    $(".btns>div").on("click",function(e){
        e.preventDefault();
        $(".btns>div").removeClass("on");
        $(this).addClass("on");
    })
})