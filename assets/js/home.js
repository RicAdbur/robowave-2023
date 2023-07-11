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
var $contactBtn = $("#contact").find(".btn")
$contactBtn.click(function(event) {
    event.preventDefault()
    // get .value out of the #email input
    var $contactInput = $("#contact").find("#email")
    var inputValue = $contactInput.val().trim()
    console.log(inputValue)
    // create a user using jsonplaceholder API POST
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
    'Content-type': 'application/json'
    },
    body: JSON.stringify({ email: inputValue })
    })
        .then(function(response) {
            console.log(response)
            // if successful
            if (response.ok && response.status === 201) {
                // redirect to signup-thankyou.html?email=<email_here>
                window.location.assign("./signup-thankyou.html?email="+inputValue)
            } else {
                console.log("Something went wrong")
            }
        })
        .catch(function(error) {
            alert("Error creating user")
            console.log(error)
        })

})


});