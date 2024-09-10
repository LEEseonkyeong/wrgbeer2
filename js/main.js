$(function () {

    $("a").click(function (event) {
        event.preventDefault();
    }); // a 클릭할때 위로가게 안가게하는거

    // sub hover
    $(".gnb_main li, .gnb_sub_bg").hover(function () {
        $(".gnb_sub, .gnb_sub_bg").stop().slideDown();
    }, function () {
        $(".gnb_sub, .gnb_sub_bg").stop().slideUp();
    }); // $(".gnb_main li, .gnb_sub_bg").hover

    // img slide
    // setInterval(function(){
    //     $(".slide").animate({"left" : "-100%"}, 1000, function(){
    //         $(".slide").append($(".slide li").eq(0));
    //         $(".slide").css({"left" : "0"});
    //     });
    // }, 2500); // $(".slide").animate

    // slick-slide
    $(".img_slide .slide").slick({
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500
    }); // img_slide slick

    $(".menu_toggle_btn").click(function () {
        $(this).toggleClass("on");
        $(".m_nav").slideToggle();
    }); // menu_toggle_btn click


    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
    });

    $(".bx-wrapper .bx-pager.bx-default-pager .bx-pager-item").eq(0).find("a").text("신메뉴");
    $(".bx-wrapper .bx-pager.bx-default-pager .bx-pager-item").eq(1).find("a").text("안주류");
    $(".bx-wrapper .bx-pager.bx-default-pager .bx-pager-item").eq(2).find("a").text("주류");

    function onlyNumber() {
        if ((event.keyCode > 48 && event.keyCode < 57) ||
            event.keyCode == 8 //backspace
            ||
            event.keyCode == 37 || event.keyCode == 39 //방향키 →, ←
            ||
            event.keyCode == 46 // delete키
            ||
            event.keyCode == 39) {} else {
            event.returnValue = false;
        };
    }; // onlyNumber



}); // jQuery
