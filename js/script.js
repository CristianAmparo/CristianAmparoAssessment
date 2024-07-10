var images,
    loadedImage = 0;

function preload() {
    images = [
        'assets/background.png',          // Background image
        'assets/female-character.png',    // Female character
        'assets/headline1.png',           // “Indulge on your bias.” text
        'assets/headline2.png',           // “Enjoy Spotify Premium.” text
        'assets/price.png',               // “P129/month” text
        'assets/learn-more.png',          // “Learn More” text
        'assets/logo.png',                // Logo
        'assets/replay-button.png'        // Replay button
    ];

    for (var i = 0; i < images.length; i++) {
        var imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false);
    }
}

function iLoad() {
    loadedImage++;
    if (images.length === loadedImage) {
        document.getElementById('background').style.backgroundImage = 'url(' + images[0] + ')';
        document.getElementById('female-character').style.backgroundImage = 'url(' + images[1] + ')';
        document.getElementById('headline1').style.backgroundImage = 'url(' + images[2] + ')';
        document.getElementById('headline2').style.backgroundImage = 'url(' + images[3] + ')';
        document.getElementById('price').style.backgroundImage = 'url(' + images[4] + ')';
        document.getElementById('learn-more').style.backgroundImage = 'url(' + images[5] + ')';
        document.getElementById('logo').style.backgroundImage = 'url(' + images[6] + ')';
        document.getElementById('replay-button').style.backgroundImage = 'url(' + images[7] + ')';

        init();
    }
}

function init() {
    document.getElementById('main').style.visibility = 'visible';
    startAnimation();
}

function startAnimation() {
    // Animation Sequence
    setTimeout(function () {
        document.getElementById('female-character').style.opacity = '1';
    }, 1000); // 1 second

    setTimeout(function () {
        document.getElementById('headline1').style.left = '0';
        document.getElementById('headline1').style.opacity = '1';
    }, 2000); // 2 seconds

    setTimeout(function () {
        document.getElementById('female-character').style.opacity = '0';
        document.getElementById('headline1').style.left = '-100%';
        document.getElementById('headline1').style.opacity = '0';
        document.getElementById('price').style.left = '0';



    }, 5000); // 5 seconds

    setTimeout(function () {
        document.getElementById('headline2').style.left = '0';
        document.getElementById('headline2').style.opacity = '1';
        document.getElementById('learn-more').style.left = '0';

    }, 6000); // 6 seconds

    setTimeout(function () {
        document.getElementById('price').style.opacity = '1';
        document.getElementById('replay-button').style.right = '0';
        document.getElementById('replay-button').style.opacity = '0';

    }, 7000); // 7 seconds

    setTimeout(function () {
        document.getElementById('learn-more').style.opacity = '1';
    }, 8000); // 8 seconds

    setTimeout(function () {
        document.getElementById('logo').style.right = '0';
        document.getElementById('logo').style.opacity = '1';

    }, 8500); // 9 seconds


    setTimeout(function () {
        document.getElementById('replay-button').style.display = 'block';
        document.getElementById('replay-button').style.opacity = '1';
    }, 10000); // 10 seconds
}

function replayAnimation() {
    var elements = document.querySelectorAll('.element');
    for (var i = 0; i < elements.length; i++) {
        var id = elements[i].id;
        if (id == 'headline2') {
            elements[i].style.opacity = '0';
            elements[i].style.left = '-100%';
        }
        if (id == 'price' || id == 'learn-more') {
            elements[i].style.opacity = '0'
            elements[i].style.left = '-100%';
        }
        if (id == 'logo' || id == 'replay-button') {
            elements[i].style.right = '-100%';
        }
    }
    document.getElementById('replay-button').style.display = 'none';
    document.getElementById('background').style.opacity = '1';

    setTimeout(startAnimation, 100);
}


document.getElementById('replay-button').addEventListener('click', replayAnimation);

window.onload = preload;
