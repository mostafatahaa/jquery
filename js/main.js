$(document).ready(function () {
    // Header
    $("header li a").on("click", function () {
        $(this)
            .addClass("active")
            .parent().siblings()
            .find("a")
            .removeClass("active")
    });

    // the offset between top of page and home section
    var homeOffest = $(".home").offset().top
    // Window app
    $(window).scroll(function () {

        var windowScroll = $(window).scrollTop()

        if (windowScroll >= 200) {
            $("header").addClass("change-header");
        } else {
            $("header").removeClass("change-header");
        }
    })

    // Dynamic taps
    // to usign this make all all section display:none except section home
    // $("header a").click(function () {
    //     var myId = $(this).attr("id");
    //     $("body section").hide()
    //     $("." + myId).fadeIn()
    // })

    // filter images
    $(".tabs button").click(function () {
        var myClass = $(this).attr("class")
        $(".images img").hide()

        if (myClass == "all") {
            $(".images img").fadeIn()
        } else {
            $(".images ." + myClass).fadeIn()
        }
    });

    // smooth scroll to sections
    var headerHieght = $("header").height()
    $("header a").click(function () {
        var id = $(this).attr("id")
        $("body,html").animate({
            scrollTop: $("." + id).offset().top - headerHieght
        })
    })

    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scroll-top").show()
        } else {
            $(".scroll-top").hide()
        }
    })

    $(".scroll-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 600)
    })

    // calculate | countDown character of textarea 
    $("textarea").keyup(function (e) {
        if (e.target.value.length >= 100) {
            e.target.value = e.target.value.substr(0, 100);
        }
    })


}) // End jQuery





