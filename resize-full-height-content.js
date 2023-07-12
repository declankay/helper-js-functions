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