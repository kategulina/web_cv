/* Controls if user went offline. */
$(document).ready(function() {
    window.addEventListener('offline', function() {
        alert('There is some problem. Please check your internet connection.');
    });
});


/* Changes background colorr depends on user choice in the 1st section. */
$(document).ready(function() {
    var colorButtons = $('.color-btn');

    colorButtons.click(function() {
        var color = $(this).data('color');

        // change the background color of each section
        $('.about-me').css('background-color', color);

        // also change color of hovered links
        $('a').hover(function() {
            $(this).css('background-color', color);
        }, function() {
            $(this).css('background-color', 'white');
        });
    });
});

/* Changes background colors (black-white) between sections while scrolling. */
$(window).scroll(function() {
    let $window = $(window),
        $body = $('body'),
        $panel = $('.color-change');
    
    // change 33% earlier than scroll position 
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // remove all classes on body with color-
            $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        // add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
    }
    });    
    
}).scroll();


/* Creates links button animation. */
const shareBtn = document.querySelector('.share-btn');
shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("clicked");
});


/* Plays audio on submit. */
$(document).ready(function() {
    $('#sent-email-form').submit(function(event) {
    const audio = $('#msg-sent-audio')[0]

    audio.volume = 0.5;
    audio.play();
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;
    }, 3000);
    });
});


/* Works with map api */
$(document).ready(function() {
    var map = L.map('map').setView([50.0755, 14.4378], 13);  // coordinates where I'm (I took just Prague coordinated)

    // add the OpenStreetMap api
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // get the user's location
    if (navigator.geolocation) {  // check if user has geolocation settings turned on
        navigator.geolocation.getCurrentPosition(function(position) {
        let userLat = position.coords.latitude;
        let userLng = position.coords.longitude;

        // create a marker for the user's location
        let userMarker = L.marker([userLat, userLng]).addTo(map).bindPopup('Your Location');
        userMarker.bindPopup("<b>You're here! :)</b>").openPopup();

        // calculate the distance between the user and me
        const pragueLat = 50.0755;
        const pragueLng = 14.4378;
        // show "my" location
        var marker = L.circle([50.0755, 14.4378], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 1000
        }).addTo(map);

        marker.bindPopup("<b>And I'm here!</b>");
        

        let distance = calculateDistance(userLat, userLng, pragueLat, pragueLng);

        // display the distance in the console
        console.log('Distance from your location to Prague:', distance.toFixed(2), 'km');
        $(".distance").text("and you're " + distance.toFixed(2) + "km away from me!");
    });
    }
    // show "my" location
    var circle = L.circle([50.0755, 14.4378], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1000
    }).addTo(map);

    circle.bindPopup("<b>I'm here!</b>").openPopup();

    // function to calculate distance between two coordinates using Haversine formula
    function calculateDistance(lat1, lng1, lat2, lng2) {
        const earthRadius = 6371; // Earth's radius in kilometers

        var latDiff = toRadians(lat2 - lat1);
        var lngDiff = toRadians(lng2 - lng1);

        var a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    }

    // function to convert degrees to radians
    function toRadians(degrees) {
      return degrees * (Math.PI / 180);
    }
});
