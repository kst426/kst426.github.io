$(document).ready(function(){

    var $btn_li = $(".btns>li");
    var $btn_li_a = $btn_li.children("a");
    var $tab= $("#tab");
    var speed = 500;
    var ease = "easeOutBack";
    $btn_li.on("click",function(e){
        e.preventDefault();
        var abc= this;
        var target = $(this).children("a").attr("href");
        var target_height= $(target).height();
        var isOn = $(this).children("a").hasClass("on");
        
        if(isOn){
            return;
        }else{
            $tab.stop().animate({"height":target_height},speed,ease);
            activateBtn(abc);
            activatePanel(target);
        }
    });
    function activateBtn(el){
        $btn_li_a.removeClass("on");
        $(el).children("a").addClass("on");
    }
    function activatePanel(sel){
        $(".panel>div").removeClass("on");
        $(sel).addClass("on");
    }



})