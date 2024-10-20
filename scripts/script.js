console.log("Page Loaded Successfully");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
body {
    background-image: url('images/MtRain.png');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed;
    background-position: center;
    font-family: 'Roboto', sans-serif;
}
