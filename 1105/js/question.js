$(document).ready(function(){
    $("#box>dl>dt").on("click",function(e){
        e.preventDefault();
        $("dt").removeClass("on");
        $("dd").slideUp();

        $(this).addClass("on");
        $(this).parent("dl").children("dd").slideDown();
    })
})