$(document).ready(function(){
	
	//페이지 로딩시 첫번째 순서값으로 슬라이더 초기화
	showSlide(0);

	var total = $(".panel li").length; //요소 갯수 

	//다음버튼 클릭 시
	$(".next").on("click",function(e){
		e.preventDefault();
		
		if(currentIndex==total - 1){
			currentIndex=0;
		}else{
			currentIndex++;
		}
		showSlide(currentIndex);
	});
	
	//이전버튼 클릭시
	$(".prev").on("click",function(e){
		e.preventDefault();
		
		 
		if(currentIndex==0){
			currentIndex=total - 1;
		}else{
			currentIndex--;
		}
		showSlide(currentIndex);
	});
	
	
	//네비버튼 클릭 시
	$(".navi li").on("click",function(e){
		e.preventDefault();
		
		var i = $(this).index();
		showSlide(i);
	});	



	
	//슬라이더 패널정의 함수
	function showSlide(index){
		$(".navi li a").removeClass("on");
		$(".navi li").eq(index).children("a").addClass("on");
		
		$(".panel li").fadeOut().removeClass("on");
		$(".panel li").eq(index).fadeIn().addClass("on");

		currentIndex = index;
	}	
	
});










