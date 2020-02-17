import database from "..BackEnd/database.js"
let DATA = new database();

let b = 0;

const check = document.getElementById('os');

 check.onclick = function () {
     let username = document.getElementById('username').value ;
     let password = document.getElementById('password').value ;
     let repass = document.getElementById('repass').value ;
     check(username,password,repass)

};



//check for database
function check(username ,password ,repass) {
    let a = username.lenght;
  if(repass != password) {
   alert("mật khẩu không hợp lệ");
  }else {
      if(a < 6 ){
     alert("tên đăng nhập không thích hợp");
  }else {
      DATABASE(username ,password)
  }
};
};


function DATABASE(username,password) {
      DATA.username[b] = username ;
      DATA.password[b] = password;
      b++; 
};
