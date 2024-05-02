$(document).ready(function() {
    $('#messageState').change(function() {
        if ($('#messageState').is(':checked')) {
            $('.message').show().animate({'bottom': '10%'}, 2000); // Animate to a visible position
            $('body').css('background-image', 'url("https://marketplace.canva.com/EAEvPRTwFtU/3/0/1600w/canva-beige-doodle-heart-desktop-wallpaper-zwtpUKFUbWs.jpg")'); // Set heart background with fade-in effect
        } else {
            $('.message').animate({'bottom': '0%'}, 2000, function() {
                $(this).hide(); // Hide after animation completes
            });
            $('body').css('background-image', 'none'); // Remove heart background
        }
    });
});

    // Optional: Handling animation end events for extra effects or cleanup
    $(".message").on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
        console.log("Animation End");
        // Additional actions upon animation completion if needed
    });

    // Handling animation end events for the heart icon for any required cleanup or additional effects
    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer")) {
            $(".heart").addClass("openedHer").addClass("beating");
        } else {
            $(".heart").addClass("no-anim").removeClass("beating");
        }
        $(".heart").removeClass("openHer closeHer");
    });

