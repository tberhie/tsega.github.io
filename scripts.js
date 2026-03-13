/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    async function updateVisitorCount() {
        try {
            const response = await fetch('https://gn7s0qhoh8.execute-api.us-east-1.amazonaws.com/practice/count', {
                method: 'POST', // Use POST to update the count
            });
            const data = await response.json();
            console.log('Visitor count updated:', data.count); // Log the updated count
        } catch (error) {
            console.error('Error updating visitor count:', error); // Log any errors
        }
    }
    
    // Call the function when the page loads or based on your requirement
    updateVisitorCount();
    
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

  // Fetch and update visitor counter from DynamoDB through API Gateway
  $(document).ready(function () {
    // API Gateway endpoint URL
    const apiUrl = 'https://{api-id}.execute-api.{region}.amazonaws.com/prod/count';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the updated count on the page
            $('#visitor-count').text(data.count);
        })
        .catch(error => console.error('Error fetching visitor count:', error));
});


})(jQuery); // End of use strict
