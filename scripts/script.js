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
    background-image: url('https://www.google.com/imgres?q=mt%20rainier&imgurl=https%3A%2F%2Fwww.visittheusa.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fhero_l%2Fpublic%2Fimages%2Fhero_media_image%2F2016-10%2FMt%2520Rainier.jpg%3Fh%3D4687dff9%26itok%3DGMZdmHDx&imgrefurl=https%3A%2F%2Fwww.visittheusa.com%2Fdestination%2Fmount-rainier-national-park&docid=sqLwkAW_4tWkWM&tbnid=BOWXspOa3pzfUM&vet=12ahUKEwjp8MHsz5uJAxV9RTABHS5WOpgQM3oECGsQAA..i&w=1280&h=700&hcb=2&ved=2ahUKEwjp8MHsz5uJAxV9RTABHS5WOpgQM3oECGsQAA');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed
    background-position: center
    font-family: Robotica;
}
