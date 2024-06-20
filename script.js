const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu"),
themeToggle = document.querySelector(".theme-toggle"),
themeIcon = document.querySelector("#theme-icon");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    });

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    });
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
});

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");

    if (document.documentElement.classList.contains("light-mode")) {
        themeIcon.classList.replace("fa-moon-o", "fa-sun-o");
    } else {
        themeIcon.classList.replace("fa-sun-o", "fa-moon-o");
    }
});

function animateContent(selector) {
    selector.forEach((sel) => {
        gsap.to(sel, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

// Countdown
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

// Handle form submission

/*document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    sendThankYouEmail(email);
});

function sendThankYouEmail(email) {
    var emailBody = "Thank you for your submission. This is a no-reply message.";
    window.location.href = `mailto:${email}?subject=Thank you for your submission&body=${encodeURIComponent(emailBody)}`;
}
*/
//countdown ends

function scrollTriggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}

animateContent([".home .content h5", ".home .content h1", ".home .content p", ".home .content .search"]);

scrollTriggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTriggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTriggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"]);

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"]);

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1", ".destinations .gallery .box2", ".destinations .gallery .box3", ".destinations .gallery .box4"]);

galleryAnimation(".featured .gallery", [".featured .gallery .box1", ".featured .gallery .box2", ".featured .gallery .box3", ".featured .gallery .box4"]);

galleryAnimation(".feedback .voices", [".feedback .voices .box1", ".feedback .voices .box2", ".feedback .voices .box3", ".feedback .voices .box4", ".feedback .voices .box5", ".feedback .voices .box6"]);

document.getElementById('language-select').addEventListener('change', function() {
    if (!isGoogleTranslateLoaded()) {
        alert('Google Translate is still loading. Please try again.');
        return;
    }
    var language = this.value;
    var translateFrame = document.querySelector('iframe.goog-te-menu-frame');
    var translateFrameDoc = translateFrame.contentDocument || translateFrame.contentWindow.document;
    var languageAnchor = translateFrameDoc.querySelector('a[data-value="' + language + '"]');
    if (languageAnchor) {
        languageAnchor.click();
    }
});

function isGoogleTranslateLoaded() {
    return document.querySelector('iframe.goog-te-menu-frame') !== null;
}

window.addEventListener('load', function() {
    var interval = setInterval(function() {
        if (isGoogleTranslateLoaded()) {
            clearInterval(interval);
        }
    }, 1000);
});
