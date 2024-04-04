const div1= document.getElementsByTagName('*');
const b1=document.getElementById('b1');
let n= div1.length;


function fv(){
    for( let i=0;i<n;i++){
div1[i].style.color="green";
        
    }
}

b1.addEventListener('click',fv);