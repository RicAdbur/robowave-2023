var botNameEl = document.getElementById('botName')
var botPriceEl = document.getElementById('botPrice')
var totalCostEl = document.getElementById('totalCost')
var loadingEl = document.getElementById('loading')
var params = new URLSearchParams(window.location.search)
var botName = params.get('botName')
var botPrice = parseInt(params.get('botPrice'))

var shippingFee = 0.5

// Boston coordinates
var factoryCoordinates = {
    lat: 42.358990,
    lon: -71.058632,
  }

  function getDistanceFromFactory(position) {
    var userLat = position.coords.latitude
    var userLon = position.coords.longitude
    
    // get distance using distancematrix API
    fetch('https://api.distancematrix.ai/maps/api/distancematrix/json?origins=' + factoryCoordinates.lat + ',' + factoryCoordinates.lon + '&destinations=' + userLat + ',' + userLon + '&key=FfjlQNSycwguu8hTigfcqloxlIRYU') // needs updated API key
    .then(function(response) {
        return response.json()
        
    })
    .then(function(distanceData) {
        // once we have mileage
        var distance = parseFloat(distanceData.rows[0].elements[0].distance.text.split(" ")[0])
        // calculate shipping
        var total = calculateShipping(distance)
        console.log(total)
        displayTotals(total)

    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        // hide loading animation
        loadingEl.classList.remove('d-flex')
        loadingEl.classList.add('d-none')
    })
  }

  function calculateShipping(distance) {
    return (distance * shippingFee) + botPrice
  }

  function displayTotals(total) {
    // DOM updates
    botNameEl.innerText = botName
    botPriceEl.innerText = "Base Price: $" + botPrice
    totalCostEl.innerText = "Total Cost: $" + total
  }

if (navigator.geolocation) {

    function success(position) {
        getDistanceFromFactory(position)
    }
    // get user's coordinates using GeoLocation API in browser
    navigator.geolocation.getCurrentPosition(success, function() {
        console.log("Error with geolocation")
    })
} else {
    console.log("No geolocation :(")
}