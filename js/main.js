$(document).ready(function(){ 

    //주메뉴
   $("nav > ul > li > a").bind("mouseover focus",function(){
       var ht = $(this).next().height();

        $(".header_wrap").stop().animate({"height":70+ht},500,"linear");

        $("nav > ul > li > div").css("display","none");
        $(this).next().css({"display":"block"});
    });


    $("nav").bind("mouseleave blur",function(){
        $(".header_wrap").stop().animate({"height":"70px"},300,"linear");
        $("nav > ul > li > div").css({"display":"none"});
    });

    //돋보기 검색창
    $(".btn_srch > a").click(function(){
        $("div.srch_wrap").css("display","block");
    });

    $("a.btu_srch_close").click(function(){
        $("div.srch_wrap").css("display","none");
    });




    // 오토배너
    var $bnnNum = 0;
    var lastNum = $(".slide_wrap>li").size()-1;

    //next 버튼
    $(".btn_next").click(function(){
        $bnnNum++;
        if($bnnNum>lastNum) {$bnnNum=0;}

        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".slide_roll > ul > li").removeClass("on")
        $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
    });
    //prev 버튼
    $(".btn_prev").click(function(){
        $bnnNum--;
        if($bnnNum<0) {$bnnNum=lastNum;}

        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".slide_roll > ul > li").removeClass("on")
        $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
    });
    //오토배너
    function autoBanner(){
        //next버튼 눌렀을때
        $bnnNum++;
        if($bnnNum>lastNum){$bnnNum=0}

        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".slide_roll > ul > li").removeClass("on")
        $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
    }
    var $autoBnn = setInterval(autoBanner,5000); //5초뒤에 함소호출(반복)


    //배너 재생 멈춤 버튼
    var flag=true;
    $("a.btn_play").click(function(){
        if(flag){
            //오토배너가 멈춰라
            clearInterval($autoBnn);
            //이미지가 바꾸는 것
            $(this).addClass("on");
            flag=false
        }else{
            //오토배너 다시 시작해라
            $autoBnn = setInterval(autoBanner, 5000);
            //이미지 바꾸는 것
            $(this).removeClass("on");
            flag=true;

        }
    });
    

    //롤링버튼클릭
    $(".slide_roll li a").click(function(){
        var rollNum = $(this).parent().index();

        $(".slide").removeClass("active");
        $(".slide").eq(rollNum).addClass("active");

        $(".slide").removeClass("on");
        $(".slide").eq(rollNum).addClass("on");
    });




    //top버튼
    //top 버튼
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        if(scroll <= 0){
            $(".btn_top").removeClass("on ab");
        }else if(scroll > 0 && scroll < 2700){
            $(".btn_top").removeClass("ab");
            $(".btn_top").addClass("on");
        }else{
            $(".btn_top").addClass("ab");
        }
    });

    $(".btn_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing")
    });





});