/**
 * Scroll to Element 
 *
 * @param {string} selector
 * @param {number} duration
 * @return null
 */

function scrollToElement(selector, duration) {

    // Animate to the section further down the page
    $('html, body').animate({
        scrollTop: $(selector).offset().top - $('.nav-push').outerHeight()
    }, duration);

}