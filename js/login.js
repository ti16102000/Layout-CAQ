$(function(){
    $("#form-login").submit(function (e) {
        e.preventDefault();
        $(".required-field").removeClass("show-error-msg"); //hide all of error messages in view (if having show)
        var hasErrorRequiredField = false;
        $("#form-login input[data-required]").each(function(){
            var ele = $(this);
             //show error message on the required field if the value of it is empty.
            if(ele.val()==""){
                ele.parent().find(".required-field").addClass("show-error-msg");
                hasErrorRequiredField = true;
            }
        })
        if(hasErrorRequiredField){
            return false;
        }else{
            //get values of email and password in form
            var form = $("#form-login");
            var email = form.find("input[name=email]").val();
            var pwd = form.find("input[name=password]").val();
            //encrypt password - using crypto library cdn link
            var encryptPwd = CryptoJS.MD5(pwd, "CAQ");
            //read data from json file
            $.getJSON('login_accounts.json', function(datas) {
                //filter account by email and encrypted password.
                var res = datas.filter(function(obj){
                    return obj.email == email && obj.password == encryptPwd;
                })
                //check account exist
                if(res.length > 0){
                    //store name and avatar into localStorage
                    localStorage.setItem('nameUser', res[0].name);
                    localStorage.setItem('avatarUser', res[0].avatar);
                    window.location.href = "index.html"; //return index.html
                }else{
                    //show error message
                    $("#error-exist").addClass("show-error-msg");
                }
            });
        }
    });
})