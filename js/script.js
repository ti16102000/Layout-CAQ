
$(function () {
    //check login
    checkUserLogin()
})

function checkUserLogin(){
    //get info of user login
    var userLogin = localStorage.getItem('nameUser'); //get data of name
    if (userLogin != null) {
        var avtPath = localStorage.getItem('avatarUser');//get image path of avatar
        $(".btn-login").hide();//hide login button
        $(".userLogin-container").css("display", "block");//show html of user login
        var nameUser = userLogin.split(" ").slice(-1)[0];//get last name of name
        $(".userLogin-container .avatar-user").attr("src",avtPath);//set path image into img tag of user login
        $(".userLogin-container .name-user").text(nameUser);//set name into span tag of user login
    }
}
//function of logout button in header
function logoutUser(){
    //remove localStorage of user login
    localStorage.removeItem("nameUser");
    localStorage.removeItem("avatarUser");
    //reload current page
    location.reload();
}

//function of show/hide tabs
function openTab(idTab) {
    var i;
    var x = document.getElementsByClassName("article-content__list");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(idTab).style.display = "flex";
}