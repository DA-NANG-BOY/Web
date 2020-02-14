import database from "./Đăng ký"

let data = new database();

const a = document.getElementById('submit');

a.onclick = function() {
      let username = document.getElementById('username').value ;
      let password = document.getElementById('password').value ;

      CheckUsername(username,password);
    
};


function CheckUsername(username,password) {
   for(let i =0 ; i<=data.username.lenght;i++) {
        if(username == data.username[i]){
            CheckPassword(password);
        }else {
             if(i == data.username.lenght){
             alert("tài khoản không xác thực");
             }
        };
   };
};

function CheckPassword(password) {
      for(let i =0 ; i<=data.password.lenght;i++) {
           if(password == data.password[i]){
                  window.href="Main.html"
           }else {
                if(i == data.password.lenght){
                alert("Mật khẩu không xác thực");
                };
           };
      };
   };