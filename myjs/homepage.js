$(window).scroll(function () {
    headerInit();
});

function headerInit() {
    if ($(this).scrollTop() > 0) {
        $("body").addClass("fixed-header-on");
    } else {
        $("body").removeClass("fixed-header-on");
    }
}

headerInit();