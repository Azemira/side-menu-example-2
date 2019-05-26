$(function() {
    $(".main-menu .item>a").on("click", function() {
        var submenuOpen = false;
        if ($(this).parent().find(">.submenu").hasClass("show"))
            submenuOpen = true;

        $(".submenu-open").removeClass("submenu-open")
        $(".submenu.show").removeClass("show")
        if (!submenuOpen) {
            $(this).parent().find(">.submenu").addClass("show");
            $(this).parent().addClass("submenu-open")
        }
        //mark active li 
        $(".active").removeClass("active")
        $(this).parent().addClass("active")
    })

})