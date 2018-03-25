$(function () {
    var k = $(window).height();
    var flag = false;
    //点击播放下一屏幕
    $(".next").click(function (event) {
        $.fn.fullpage.moveSectionDown();
    })
    $('#fullpage').fullpage({
        //是否显示项目导航
        navigation: true,
        loopBottom: true,
        scrollingSpeed: 1200,
        //回调函数
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $(".next").fadeOut();
                $(".search").show().animate({"right": 370}, 1500, "easeOutBack", function () {
                    $(".search-word").animate({"opacity": 1}, 500, function () {
                        $(".search").hide();
                        $(".search-img").show().animate({"height": 30, "right": 250, "bottom": 452}, 1000);
                        $(".goods-sofa").show().animate({"height": 218}, 1000);
                        $(".word-1").animate({"opacity": 0}, 500, function () {
                            $(".word-2").animate({"opacity": 1}, 500, function () {
                                $(".next").fadeIn();
                            });
                        });
                    });
                });
            }
            ;
        },
        onLeave: function (index, nextIndex, direction) {
            $(".next").fadeOut();
            if (index == 2 && nextIndex == 3) {
                $(".sofa-2").show().animate({"bottom": -k + 250, "width": 207, "left": 260}, 2000, function () {
                    $(".img-a").animate({"opacity": 1}, 500, function () {
                        $(".btn-a").animate({"opacity": 1}, function () {
                            $(".next").fadeIn();
                        });
                    });
                });
                $(".cover").show();
            }
            ;
            if (index == 3 && nextIndex == 4) {
                $(".sofa-2").hide();
                $(".sofa-t1").show().animate({"bottom": -(k - 200), "left": 260}, 1500, function () {
                    $(this).hide();
                    $(".car-sofa").show();
                    $(".car").animate({"left": 3000}, 2000, "easeInElastic", function () {
                        $(".node").show();
                        $(".node-word,.word-a").animate({"opacity": 1}, 1000, function () {
                            $(".next").fadeIn();
                        });
                    });
                });
            }
            ;
            $(".next").fadeOut();
            if (index == 4 && nextIndex == 5) {
                $(".hand").animate({"bottom": 0}, 2000, function () {
                    $(".mouse-a").show();
                    $(".sofa-5").show().animate({"bottom": 70}, 1000, function () {
                        $(".order-05").animate({"bottom": 390}, 1000, function () {
                            $(".word-05").addClass("word-05-a");
                            $(".next").fadeIn();
                        });
                    });
                });
            }
            ;
            $(".next").fadeOut();
            if (index == 5 && nextIndex == 6) {
                $(".sofa-5").animate({"bottom": -k + 500, "left": "40%", "width": 65}, 1500, function () {
                    $(".sofa-5").hide();
                });
                $(".box").animate({"left": "38%"}, 1500, function () {
                    $(".box").animate({"bottom": 40}, 800, function () {
                        $(".box").hide();
                        $(".section6").animate({"backgroundPositionX": "100%"}, 3000, function () {
                            $(".pop").show();
                            $(".man").show().animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({"right": 500}, 500, function () {
                                    $(".door").animate({"opacity": 1}, 200, function () {
                                        $(".women").show().animate({"height": 305, "right": 350}, 500,function () {
                                            $(".next").fadeIn();
                                        });
                                    });
                                    $(".get").show();
                                });
                            });
                        });
                        $(".word-6").show().animate({"left": "30%"}, 3000);
                    });
                });
            }
            ;
            $(".next").fadeOut();
            if (index == 6 && nextIndex == 7) {
                setTimeout(function () {
                    $(".star").animate({"width": 120}, 500, function () {
                        $(".good").show();
                        $(".next").fadeIn();
                    });
                }, 2000)
            }
            ;
            //$(".start").mouseenter(function (event) {
            //    $(".gif").show();
            //}).mouseleave(function (event) {
            //    $(".gif").hide();
            //});
            $(".start").hover(function () {
                $(".gif").toggle();
            });
            $(document).mousemove(function (event) {
                var x = event.pageX - $(".hand-8").width() / 2;
                var y = event.pageY + 10;
                var miny = k - 449;
                if (y < miny) {
                    $(".hand-8").css({"left": x, "top": miny});
                } else {
                    $(".hand-8").css({"left": x, "top": y});
                }
                ;

            });
            $(".again").click(function (event) {
                $.fn.fullpage.moveTo(1);
                $("img,.move").attr("style", "");
            });

        }
    });
});