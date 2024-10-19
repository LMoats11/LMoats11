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
    background-image: url('https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_807,q_75,w_1200/v1/clients/tacoma/Visit_Tacoma_PierceCount_Mt_Rainier_6c4a5f5c-a92d-46d7-9d2b-978c711ca504.jpg')
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed
    background-position: center
    font-family: Robotica;
}
