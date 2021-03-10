const mobile_menu = document.querySelector(".mobile-menu"),
    mobile_trigger = document.querySelector(".mobile-menu__trigger");

document.addEventListener("click", function(event) {
    if (event.target == mobile_trigger) {
        mobile_menu.classList.toggle("mobile-menu_open");
    }
    if (event.target !== mobile_trigger && event.target !== mobile_menu) {
        if (mobile_menu.classList.contains("mobile-menu_open")) {
            mobile_menu.classList.remove("mobile-menu_open");
        }
    }
});