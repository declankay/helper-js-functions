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