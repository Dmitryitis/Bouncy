$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);

    $(window).on("scroll", function () {
        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset);
    });


    function checkScroll(scrollOfset) {
        if (scrollOfset + 50 >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;

        $('#nav a').removeClass("active");
        $this.addClass("active");
        $('#nav').removeClass("active");

        console.log(blockId);


        $("html, body").animate({
            scrollTop: blockOfset
        }, 500);

    });


    /*Filter*/
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {

                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

    });

    $("#burger").on("click", function (event) {

        event.preventDefault();

        $("#nav").toggleClass("active");

    });

    $('.slider').slick({
        infinite: true,
        sliderToShow: 1,
        sliderToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    $('.reviews').slick({
        infinite: true,
        sliderToShow: 1,
        sliderToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});


$(function () {
    var progressbar = $('#progressbar'),
        max = progressbar.attr('min'),
        time = (1000 / 100) * 5,
        value = progressbar.val();

    var loading = function () {
        value += 1;
        addvalue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading()
    }, time);


});





$(function () {
    var progressbar = $('#progress'),
        max = progressbar.attr('min'),
        time = (1000 / 100) * 5,
        value = progressbar.val();

    var loading = function () {
        value += 1;
        addvalue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading()
    }, time);
});

$(function () {
    var progressbar = $('#progres'),
        max = progressbar.attr('min'),
        time = (1000 / 100) * 5,
        value = progressbar.val();

    var loading = function () {
        value += 1;
        addvalue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading()
    }, time);
});


$(function () {
    var progressbar = $('#progre'),
        max = progressbar.attr('min'),
        time = (1000 / 100) * 5,
        value = progressbar.val();

    var loading = function () {
        value += 1;
        addvalue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading()
    }, time);
});

$(function () {
    var progressbar = $('#progr'),
        max = progressbar.attr('min'),
        time = (1000 / 100) * 5,
        value = progressbar.val();

    var loading = function () {
        value += 1;
        addvalue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading()
    }, time);
});


$(function () {
    var progressbar = $('#prog'),
        max = progressbar.attr('min'),
        time = (1000 / 100) * 5,
        value = progressbar.val();

    var loading = function () {
        value += 1;
        addvalue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading()
    }, time);
});
