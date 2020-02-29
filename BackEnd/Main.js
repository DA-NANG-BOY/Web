import database from "./database";
import sanpham from "./sanpham";
import đăng from "./sanpham";




function check(name,soluong,master) {
  this.name = name ;
  this.soluong = soluong;
  this.master = master ;
  this.Checked() = function () {

  } 
}

function sanpham_hot(name,soluong,master) {
      
    this.loop = function (){
    setTimeout(loop(),3000)
}
}
const loading = document.getElementById('loading');
function xóa() {
    document.body.removeChild(loading);
};

setTimeout(xóa,2000);
setTimeout(check())