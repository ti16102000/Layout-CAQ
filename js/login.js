$(function(){
    $("#form-login").submit(function (e) {
        e.preventDefault();
        $(".required-field").removeClass("show-error-msg");
        var hasErrorRequiredField = false;
        $("#form-login input[data-required]").each(function(){
            var ele = $(this);
            if(ele.val()==""){
                ele.parent().find(".required-field").addClass("show-error-msg");
                hasErrorRequiredField = true;
            }
        })
        if(hasErrorRequiredField){
            return false;
        }else{
            var form = $("#form-login");
            var email = form.find("input[name=email]").val();
            var pwd = form.find("input[name=password]").val();
            var encryptPwd = CryptoJS.MD5(pwd, "CAQ");
            $.getJSON('login_accounts.json', function(datas) {
                var res = datas.filter(function(obj){
                    return obj.email == email && obj.password == encryptPwd;
                })
                if(res.length > 0){
                    localStorage.setItem('nameUser', res[0].name);
                    localStorage.setItem('avatarUser', res[0].avatar);
                    window.location.href = "index.html";
                }else{
                    $("#error-exist").addClass("show-error-msg");
                }
            });
        }
    });
})