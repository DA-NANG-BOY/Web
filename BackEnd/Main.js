import sanpham from "./sanpham.js"

let result = new sanpham();

const searching = document.getElementById('search');

function check(search) {
     const search = search ;
     if(search.lenght == 0){
         break;
     }else {
          searching(search);
     }
};

function searching (search) {
     const search = search ;
};



searching.onclick = function() {
      const search = document.getElementById('searching').value ;
      check(search);

};