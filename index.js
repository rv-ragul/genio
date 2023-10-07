let slideIndex = 0;
showSlides();

function showSlides(){
    let slides = document.getElementsByClassName("myslides");
    // let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        // slides[i].className = dots[i].className.replace("active", "");
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}
