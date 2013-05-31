$(document).ready(function () {
    //preload image
    $("body").queryLoader2();

    var pressHomeTime, intervalId;
    $(".home").on("mousedown", function () {
        pressHomeTime = Date.parse(new Date());
        intervalId = setInterval(function () {
            var delay = Date.parse(new Date()) - pressHomeTime;
            if (delay < 2000) {
                //GoHome();
            }
            if (delay >= 2000) {
                Starting(intervalId);

            }
        }, 50)
    })
    $(".home").on("mouseup", function () {
        clearInterval(intervalId);
    })

    $(".w").click(function () {

        $("#main").addClass("whitetheme", 3000);
        $("#main").removeClass("blacktheme", 1000);
        $(".home").attr("src", "images/ipad_home_button_white.png")
        return false;
    });
    $(".b").click(function () {
        $("#main").addClass("blacktheme", 3000);
        $("#main").removeClass("whitetheme", 1000);
        $(".home").attr("src", "images/ipad_home_button.png")
        return false;
    });


});

var Starting = function (intervalId) {
    clearInterval(intervalId);
    $(".home").off("mousedown");
    $(".content").fadeIn(2000);
    ChangeScreenIn(1);
    //header time
    $(".lock_header .time").html(moment().format('h:mm'));
    $(".lock_header .day").html(moment().format("MMM Do YY"));

    //slide
    var draglen = 0;
    $(" .slidebutton").draggable({
        axis:"x",
        containment:"parent",
        revert:true,
        start:function () {
            draglen = 0;
        },
        drag:function () {
            draglen++;
        },
        stop:function () {
            if (draglen > 10 && draglen < 60) {

                ChangeScreenIn(2)

            }
        }
    });
}

var ChangeScreenIn = function (step) {
    $(".model").css("display", "none")
    $(".step" + step).fadeIn();
}
