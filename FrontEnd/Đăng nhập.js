import DATABASE from "./Đăng ký"

let data = new DATABASE();

const a = document.getElementById('submit');

a.onclick = function() {
      let username = document.getElementById('username').value ;
      let password = document.getElementById('password').value ;

      CheckUsername(username);
      CheckPassword(password);
};


function CheckUsername(username) {
   
}