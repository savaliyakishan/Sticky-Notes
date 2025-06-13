
/*
 * It would trigger whenever user open app
 *
 */

jQuery(document).ready(function () {

    // getting stored notes
    chrome.storage.local.get("my-notes", function (obj) {
        // show already stored data when user open up the pop up
        var stored_notes = obj['my-notes'];
        jQuery("#notes-text").val(stored_notes);

    });


});
