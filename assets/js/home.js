// fullpage.js
$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: "gplv3-license",
        navigation: true,
        navigationTooltips: ["Welcome", "New Robots", "Used Robots", "Contact"]
    });

    // typewriter.js
var typewriterElements = document.querySelectorAll(".typewriter-effect")
for (var i = 0; i < typewriterElements.length; i++) {
    var currentEl = typewriterElements[i]
    var innerText = currentEl.innerText
    
    new Typewriter(currentEl, {
        loop: true,
    }).typeString(innerText).pauseFor(1000).start()
}

// power glitch
PowerGlitch.glitch('.glitch', {
    hideOverflow: true
})

// last error date

$("[data-lastErrorDate]").each(function() {
    // get date from data-lastErrorDate
    var errorDate = $(this).attr("data-lastErrorDate")
    // turn date into dayjs object
    errorDate = dayjs(errorDate)
    // get today's date as a dayjs object
    var today = dayjs()
    // find difference in days between the dates
    var diff = today.diff(errorDate, "day")
    
    // determine text color class
    var textClass
    if (diff < 5) {
        textClass = "text-danger"
    } else if (diff < 30) {
        textClass = "text-warning"
    } else {
        textClass = "text-success"
    }
    
    $(this).text(diff + " days since last error").addClass(textClass)
})

// Listen for submit events on the signup form
    // event.preventDefault()
    // get .value out of the #email input
    // create a user using jsonplaceholder API
        // if successful
            // redirect to signup-thankyou.html?email=<email_here>

});