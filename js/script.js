
$(function () {
    //check login
    checkUserLogin()
})

function checkUserLogin(){
    var userLogin = localStorage.getItem('nameUser');
    if (userLogin != null) {
        var avtPath = localStorage.getItem('avatarUser');
        $(".btn-login").hide();
        $(".userLogin-container").css("display", "block");
        var nameUser = userLogin.split(" ").slice(-1)[0];
        $(".userLogin-container .avatar-user").attr("src",avtPath);
        $(".userLogin-container .name-user").text(nameUser);
    }
}

function logoutUser(){
    localStorage.removeItem("nameUser");
    localStorage.removeItem("avatarUser");
    location.reload();
}

//slide hero carousel
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel__item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//articles tab
function openTab(idTab) {
    var i;
    var x = document.getElementsByClassName("article-content__list");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(idTab).style.display = "flex";
}