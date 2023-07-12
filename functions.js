/**
 * Aspect Ratio
 *
 * @return null
 */

function aspectRatio() {

    // If there is an aspect ratio element
    if ($('.aspect-ratio')[0]) {

        // Loop through each aspect ratio element
        $('.aspect-ratio').each(function () {

            // Get the aspect ratio width
            var aspectRatioWidth = $(this).attr('data-aspect-ratio-width');

            // Get the aspect ratio height
            var aspectRatioHeight = $(this).attr('data-aspect-ratio-height');

            // Get the aspect ratio as a decimal
            var aspectRatio = aspectRatioWidth / aspectRatioHeight;

            // Get the width of the element
            var elementWidth = $(this).width();

            // Calculate the height of the element
            var elementHeight = elementWidth / aspectRatio;

            // Set the height of the element
            $(this).css('height', elementHeight + 'px');

        });

    }

}

/**
* Get Breakpoint  
*
* @param {number} windowWidth
* @return {string} breakpoint
*/

function getBreakpoint(windowWidth) {

    // Create the breakpoint variable and get the window width
    var breakpoint = "";
    var windowWidth = parseInt(windowWidth);

    // If mobile
    if (windowWidth >= 0 && windowWidth <= 575) {

        breakpoint = "XS";

    }

    // If phablet
    else if (windowWidth >= 576 && windowWidth <= 767) {

        breakpoint = "SM";

    }

    // If tall tablet
    else if (windowWidth >= 768 && windowWidth <= 991) {

        breakpoint = "MD";

    }

    // If wide tablet
    else if (windowWidth >= 992 && windowWidth <= 1199) {

        breakpoint = "LG";

    }

    // If desktop
    else if (windowWidth >= 1200 && windowWidth <= 1919) {

        breakpoint = "XL";

    }

    // If HD
    else if (windowWidth >= 1920 && windowWidth <= 2559) {

        breakpoint = "XXL";

    }

    // If UHD
    else {

        breakpoint = "XXXL";

    }

    return breakpoint;

}

/**
 * Resize Full Height Content
 *
 * @param {string} elementSelector
 * @param {string} offsetSelector
 * @return null
 */

function resizeFullHeightContent(elementSelector, offsetSelector = $('.nav-push')) {

    // Set the height to the height of the device (minus the iOS bar)
    $(elementSelector).height(window.innerHeight - offsetSelector.outerHeight());

}

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