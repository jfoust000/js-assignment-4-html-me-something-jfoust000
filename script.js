
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





