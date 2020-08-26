/* dummy alert function for prototyping
 * MVC will handle page transition events in final product
 */
function click_nav_btn(element) {
    switch(element.id) {
        case "home-btn":
            location.href="prototype_home.html";
            break;
        case "how-btn":
            location.href="prototype_how_it_works.html";
            break;
        case "advice-btn":
            location.href="prototype_advice.html";
            break;
        case "contact-btn":
            location.href="prototype_contact.html";
            break;
        case "start-analyse-btn":
            location.href="prototype_info_page.html";
            break;
        default:
            break;
    }
}