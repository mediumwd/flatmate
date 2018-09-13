$(document).ready(function () {
    $(".advantages__price ul:nth-child(2) li").slice(1).show(1000);
    
    $(".advantages__price ul:first-child").click(function () {
        if ($(this).not(".advantages__price1__anim_in")) {
            $(this).removeClass("advantages__price1__anim_out").addClass("advantages__price1__anim_in");
            $(".advantages__price ul:nth-child(2)").removeClass("advantages__price2__anim_in").addClass("advantages__price2__anim_out");
            $(".advantages__price ul:nth-child(3)").removeClass("advantages__price3__anim_in").addClass("advantages__price3__anim_out");
            $(".advantages__price ul:first-child li").slice(1).show(500);
            $(".advantages__price ul:nth-child(2) li").slice(1).hide(250);
            $(".advantages__price ul:nth-child(3) li").slice(1).hide(250);
        }
    });
    $(".advantages__price ul:nth-child(2)").click(function () {
        if ($(this).not(".advantages__price2__anim_in")) {
            $(".advantages__price ul:first-child").removeClass("advantages__price1__anim_in").addClass("advantages__price1__anim_out");
            $(this).removeClass("advantages__price2__anim_out").addClass("advantages__price2__anim_in");
            $(".advantages__price ul:nth-child(3)").removeClass("advantages__price3__anim_in").addClass("advantages__price3__anim_out");
            $(".advantages__price ul:first-child li").slice(1).hide(250);
            $(".advantages__price ul:nth-child(2) li").slice(1).show(500);
            $(".advantages__price ul:nth-child(3) li").slice(1).hide(250);
        }
    });
    $(".advantages__price ul:nth-child(3)").click(function () {
        if ($(this).not(".advantages__price3__anim_in")) {
            $(".advantages__price ul:first-child").removeClass("advantages__price1__anim_in").addClass("advantages__price1__anim_out");
            $(".advantages__price ul:nth-child(2)").removeClass("advantages__price2__anim_in").addClass("advantages__price2__anim_out");
            $(this).removeClass("advantages__price3__anim_out").addClass("advantages__price3__anim_in");
            $(".advantages__price ul:first-child li").slice(1).hide(250);
            $(".advantages__price ul:nth-child(2) li").slice(1).hide(250);
            $(".advantages__price ul:nth-child(3) li").slice(1).show(500);
        }
    });
});