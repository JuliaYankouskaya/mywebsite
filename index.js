// open HomePage by clicking Logo in the Header and Footer
const headerLogo = document.querySelector('.header-button-logo');
headerLogo.addEventListener('click', function() {
    window.location.replace('index.html')
});
const footerLogo = document.querySelector('.footer-button-logo');
footerLogo.addEventListener('click', function() {
    window.location.replace('index.html')
});


// scrolling to the second screen by clicking the Down Arrow Button
const scrollDownBtn = document.getElementById('down-arrow-button');
scrollDownBtn.addEventListener('click', function() {
    const secondScreen = document.getElementById('second-container');
    const secondScreenOffsetTop = secondScreen.offsetTop;
    window.scrollTo({
        top: secondScreenOffsetTop,
        behavior: "smooth"
    });
});




