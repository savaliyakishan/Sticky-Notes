
jQuery(document).ready(function () {

    // clearing message when user starts writing
    jQuery('#notes-text').focus(function () {
        jQuery("#msg").text("");
    });

    // Save the data automatically
    var timeoutId;
    jQuery('#notes-text').on('input propertychange change', function () {

        jQuery("#msg").text("Auto saving ...");
        // If a timer was already started, clear it.
        if (timeoutId)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            // Runs 1 second (1000 ms) after the last change    
            text = jQuery("#notes-text").val();
            // var time = new Date().getTime();

            // saving data
            captureData();

        }, 1000);
    });

});


/**
 * Capture and initiate data saving
 *
 */

function captureData() {

    text = jQuery("#notes-text").val();
    // saving data
    saveData(text, function () {
        stored_notes = getData();
        jQuery("#notes-text").val(stored_notes);
        //  jQuery("#msg").text("Successfully" + msgtype + " Saved !");
    });
}

/*
 *  Saving data to app local storage
 *  @param : String that need to be saved
 */

function saveData(text) {

    chrome.storage.local.set({"my-notes": text}, function () {
        //console.log('Saved', "my-notes", text);
        jQuery("#msg").text("Successfully saved!");
    });

}

/*
 *  Fetching stored data from local storage
 *  @param : none
 *  @return : stored item from object
 */

function getData() {
    chrome.storage.local.get("my-notes", function (items) {
        // console.log(items.my-notes);

        return items.my - notes;

    });
}