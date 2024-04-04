const c=document.getElementById('copy');
const d=document.getElementById('cut');

function copy(){
    console.log("copied");
}
function cut(){
    console.log("It has been cut");
}


c.addEventListener('copy',copy);
d.addEventListener('cut',cut);