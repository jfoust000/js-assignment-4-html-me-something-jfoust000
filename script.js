
window.addEventListener('load', function (e) {

    let carousel = document.getElementById('carousel');
    let leftButton = document.getElementById('left');
    let rightButton = document.getElementById('right');
    let video = document.querySelectorAll('embed')[0];
    let videoWidth = video.clientWidth + 18;

    leftButton.addEventListener('click', function (e) {

        carousel.scrollLeft -= videoWidth;

    });

    rightButton.addEventListener('click', function (e) {

        carousel.scrollLeft += videoWidth;

    });

});

function reveal() {

    let revealLeft = document.querySelectorAll('.wrapper-Left');
    let revealRight = document.querySelectorAll('.wrapper-Right');

    for (let i = 0; i < revealLeft.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealLeft[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {

            revealLeft[i].classList.add('active');

        } else {

            revealLeft[i].classList.remove('active');

        }

    }

    for (let i = 0; i < revealRight.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealRight[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {

            revealRight[i].classList.add('active');

        } else {

            revealRight[i].classList.remove('active');

        }

    }


}

window.addEventListener('scroll', reveal);




