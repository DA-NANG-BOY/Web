import database from "../FrontEnd/database.js"

let data = new database();

export default function sanpham(name, soluong,master) {
      this.name_where = document.getElementById('');
      this.name_where = [...name_where];
      this.soluong_where = document.getElementById('');
      this.master_where = document.getElementById('');
      check();
}

function check(name) {
       
}

export default function đăng(){
     this.src = null ;
     this.img = null ;
     this.master = null;
     this.name = null ;
     this.soluong = null ;
     this.init = function () {
          (async() => {
            this.src = await document.getElementById('picture-link').value ;
            this.
            
            this.master = await document.getElementById('chủ-sản-phẩm');
           this.name = await document.getElementById('tên-sản-phẩm');
           this.soluong = await document.getElementById('so-luong-san-pham');
           sanpham(this.name, this.soluong , this.master);
          })();
     }  
};
function sanpham_hot(name,soluong) {
       
}