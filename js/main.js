$(document).ready(function(){
  user = $(".username");
  pass = $(".password");
  login = $(".login");
  login_box = $(".login-box");

  login.on("click", function(e){
    e.preventDefault();
    user.focus();
    login_box.fadeIn("slow");
  });

  inv_login_box = function(){
    if(user.val() === "" && pass.val() === "") {
      login_box.fadeOut("slow");
    }
  };

  $(document).on("click", function(evt){
    var target = $(evt.target).attr("class");
    if(target !== "login-box" && target !== "login pull-right" && target !== "username" && target !== "password"){
      inv_login_box();
    }
  });

  $(".responsive").on("click", function(){
    $(".responsive ul").show();
  })

  $(document).on("click", function(evt){
    var target = $(evt.target).attr("class");
    if(target !== "responsive"){
      $(".responsive ul").hide();
    }
  })
});

