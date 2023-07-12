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