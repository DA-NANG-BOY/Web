import database from "./database";
import sanpham from "./sanpham";
import đăng from "./sanpham";


let sanpham = new sanpham();
let database = new database();
let đăng = new đăng();

class check {
  
}

function sanpham_hot(name,soluong,master) {

}
const loading = document.getElementById('loading');
function xóa() {
    document.body.removeChild(loading);
};

setTimeout(xóa,2000);