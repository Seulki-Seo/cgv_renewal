$(function () {
    //계열사 바로가기 버튼
    $(".partner_btn").click(function () {
        $(".partner_menu").stop().slideToggle();
    });

    //서브 메뉴
    $(".lnb, .lnb_bg").hide();
    $(".gnb li:nth-child(1)").on("mouseenter focusin", function () {
        $(".lnb, .lnb_bg").stop().slideDown();
    });
    $(".gnb li:nth-child(1)").on("mouseleave focusout", function () {
        $(".lnb, .lnb_bg").stop().slideUp();
    });

    //영화별, 극장별, 특별관
    $(".tab_left_area .btn").click(function () {
        $(".tab_left_area .btn").removeClass("on");
        $(this).addClass("on");
    });

    //영화 리스트
    $(".list_section .list li .btn").click(function () {
        $(".list_section .list li .btn").removeClass("on");
        $(this).addClass("on");
    });

    //지역 선택 버튼
    $(".tab_block_list li .btn").click(function () {
        $(".tab_block_list li .btn").removeClass("on");
        $(this).addClass("on");
    });

    //전체 영화, CGV ART HOUSE
    $(".tab_list ul li .btn").click(function () {
        $(".tab_list ul li .btn").removeClass("on");
        $(this).addClass("on");
    });

    //서브_날짜 선택
    $(".time_schedule ul li a").click(function (e) {
        e.preventDefault();
        $(".time_schedule ul li a").removeClass("on");
        $(this).addClass("on");
    });

    //메인_날짜 선택
    $(".reser_date li a").click(function (e) {
        e.preventDefault();
        $(".reser_date li a").removeClass("on");
        $(this).addClass("on");
    });

    //로그인 팝업창
    $(".right_top_list .login_btn").click(function (e) {
        e.preventDefault();
        $("#login_mask").show();
        $("body").css({ overflow: "hidden" });
    });
    $(".login_popup .close_btn").click(function () {
        $("#login_mask").hide();
        $("body").css({ overflow: "auto" });
    });

    //스크롤값 추출하기
    $(window).scroll(function () {
        let top = $(document).scrollTop();

        //스크롤을 내렸을 때 Top 버튼이 나타나게 하기
        if (top >= 1200) {
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }
    });

    //빠른 예매, 위로 가기 버튼_부드럽게 이동하게
    $(".top").click(function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 800);
    });

    $(".reser_btn").click(function () {
        $("html, body").stop().animate({ scrollTop: 700 }, 800);
    });
});