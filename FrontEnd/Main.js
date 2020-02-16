const Width = window.innerWidth;
const height = window.innerHeight ;



let loading = document.getElementById('loading');

loading.width = Width ;
loading.height = height;

function done_loading () {
 loading.width = 0 ;
 loading.height = 0;
};

