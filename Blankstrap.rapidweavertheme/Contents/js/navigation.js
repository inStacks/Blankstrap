$(function() {
    $("#blankstrap-nav").css("display", "flex");
    $("#navbarSupportedContent>ul").addClass("navbar-nav").addClass("mr-auto");
    $(".navbar-nav").children(".dropdown").children("a").addClass("dropdown-toggle").attr("href", "#").attr("data-toggle", "dropdown").attr("aria-haspopup", "true").attr("aria-expanded", "false");
    $(".navbar-nav").children(".dropdown").children("ul").addClass("dropdown-menu").attr("aria-labelledby", "navbarDropdownMenuLink");
    $(".navbar-nav").children(".dropdown").children("ul").children("li").children("a").removeClass("nav-link").addClass("dropdown-item");
    $(".navbar-nav").children(".dropdown").children("ul").children("li").children("ul").addClass("blankstrap-hide");
});
