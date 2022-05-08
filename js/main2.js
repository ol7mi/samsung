window.onload = function(){
    //주메뉴
    // var gnb = document.getElementById("gnb");
    // var li = gnb.children;

    // for(var i=0; i<li.length;i++){
    //     li.children[i].onmouseover = li.children[i].children
    //     onfocus = function(){

    //     }
        
    // }

    var gnbMenu = document.querySelectorAll(".gnb > ul > li"); //querySelectorAll li들을 몽땅 다 가져옴
    var headerWrap = document.querySelector(".header_wrap"); // querySelector 딱 header_wrap 이것만 가져옴
    console.log(gnbMenu)
    console.log(headerWrap)

    for(var i=0; i<gnbMenu.length; i++){
        gnbMenu[i].addEventListener('mouseover',function(){//addEventListener를 이용해서 mouseover 이벤트를 추가해라
            this.className += 'on';
            var ht = this.children[1].offsetHeight; //Height 대신offsetHeight, this는 il의 자식children중 1번째
            headerWrap.style.height = 70 + ht + 'px';
        });

        gnbMenu[i].addEventListener('mouseout',function(){
            this.classList.remove('on'); //classList : 클래스에서 on이라는 애를 지워라
            headerWrap.style.height = '70px';
        });
    }


    var srcBtn = document.querySelector('.btn_srch');
    var srchCloseBtn = document.querySelector('.btu_srch_close');
    var srchWrap = document.querySelector('.srch_wrap');

    srcBtn.addEventListener('click' , function(){
        srchWrap.className += ' on';
    });
    srchCloseBtn.addEventListener("click" , function(){
        srchWrap.classList.remove('on');
    });




    // 오토배너
    var btnNext = document.querySelector('.btn_next');
    var btnPrev = document.querySelector('.btn_prev');
    var slide = document.querySelectorAll('.slide');
    var slideRoll = document.querySelectorAll('.slide_roll li');
    var btnPlay = document.querySelector('.btn_play');

    var bnnNum=0;
    var lastNum = document.querySelectorAll('.slide_wrap > li').length - 1;

    //next버튼
    btnNext.addEventListener('click', function(){
        bnnNum++;
        if(bnnNum>lastNum){bnnNum=0;}

        slide.forEach(function(item){ //item 여기에 포이치(for문 대신) 하나하나를 보겠다.
            item.classList.remove('active'); //removeClass
        });
        slide[bnnNum].classList.add('active'); //addClass

        slideRoll.forEach(function(idx){ //removeClass
            idx.classList.remove('on');
        });
        slideRoll[bnnNum].classList.add('on'); //addClass
    });

    //prev버튼
    btnPrev.addEventListener('click', function(){
        bnnNum--;
        if(bnnNum<0){bnnNum=lastNum}

        slide.forEach(function(item){ 
            item.classList.remove('active'); 
        });
        slide[bnnNum].classList.add('active'); 

        slideRoll.forEach(function(idx){ 
            idx.classList.remove('on');
        });
        slideRoll[bnnNum].classList.add('on'); 
    });

    //오토배너
    function autoBanner(){
        //next버튼 눌렀을때
        bnnNum++;
        if(bnnNum>lastNum){ bnnNum=0;}

        slide.forEach(function(item){ //item 여기에 forEach(for문 대신) 하나하나를 보겠다.
            item.classList.remove('active'); //removeClass
        });
        slide[bnnNum].classList.add('active'); //addClass

        slideRoll.forEach(function(idx){ //removeClass
            idx.classList.remove('on');
        });
        slideRoll[bnnNum].classList.add('on'); //addClass
    }
    var autoBnn = setInterval(autoBanner,5000); //5초뒤에 함소호출(반복)


    // 배너 재생 멈춤 버튼
    var flag = true;
    btnPlay.addEventListener('click', function(){
        if(flag){
            clearInterval(autoBnn);
            this.classList.add('on');
            flag = false;
        }else{
            autoBnn = setInterval(autoBanner,5000);
            this.classList.remove('on');
            flag = true;
        }
    });

    //롤링버튼클릭
    // $(".box").next();
    // $(".box").prev();
    // $(".box").parent();

    // var box = document.querySelector(".box");
    // box.nextElementSibling;
    // box.previousElementSibling;
    // box.parentElement;
    slideRoll.forEach(function(item){
        item.addEventListener('click', rollAction);
    });
    function rollAction(item){
        curRoll = item.currentTarget; // 클릭이벤트가 전달된 엘리먼트
        parentRoll = curRoll.parentElement; //연결된 엘리먼트의 부모
        childRoll = parentRoll.children; //부모 엘리먼트의 자식 엘리먼트
        curIdx = Array.from(childRoll).indexOf(curRoll); //연결된 엘리먼트의 인덱스
    
        slide.forEach(function(item){
            item.classList.remove('active'); 
        });
        slide[curIdx].classList.add('active');  

        slideRoll.forEach(function(idx){
            idx.classList.remove('on');
        });
        slideRoll[curIdx].classList.add('on'); 
        bnnNum = curIdx; //배너 번호에 내가 클릭한 인덱스 번호를 넣어줌.
    }



    //top버튼
    var btnTop = document.querySelector('.btn_top');

    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('html').scrollTop;
        console.log('scroll: ' + scroll);

        if(scroll <= 0){
            btnTop.classList.remove("on","ab");
        }else if(scroll > 0 && scroll < 2700){
            btnTop.classList.remove("ab");
            btnTop.classList.add("on");
        }else{
            btnTop.classList.add("ab");
        }
    });

    btnTop.addEventListener('click',function(e){
        e.preventDefault();

        window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        });
    });
}