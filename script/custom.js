var arrayOfCursors = ["/assets/cursors/cursor1.png", "/assets/cursors/cursor2.png", "/assets/cursors/cursor3.png", "/assets/cursors/cursor4.png", "/assets/cursors/cursor5.png", "/assets/cursors/cursor6.png", "/assets/cursors/cursor7.png"];


// Check if the document is ready
jQuery(document).ready(function ($) {
    var count = 0;
    var maximum = arrayOfCursors.length;

    // Function to iterate through array
    $(".item").hover(function () {
        var anchor = $(this).find("a");
        var currentCursor = arrayOfCursors[count];
        var csserrr = 'url("' + currentCursor + '"), auto';
        $(anchor).css({
            "cursor": csserrr
        });
        count++;

        if (count == maximum) {
            count = 0;
        }

    }, function () {});

});