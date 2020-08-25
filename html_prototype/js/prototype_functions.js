/* dummy alert function for prototyping
 * MVC will handle page transition events in final product
 */
function click_nav_btn(element) {
    switch(element.id) {
        case "home-btn":
            location.href="prototype_home.html";
            break;
        case "how-btn":
            alert("How it works page dummy response.");
            break;
        case "advice-btn":
            alert("Career advice page dummy response.");
            break;
        case "contact-btn":
            location.href="prototype_contact.html";
            break;
    }
}