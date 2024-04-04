const but1= document.getElementById('b1');
const div=document.getElementsByClassName('c1');
const b=document.body;


n= div.length;

function funq(){
    b.style.backgroundColor="black";
    for(i=0;i<n;i++){
        if(i>=0 && i<7){
            div[i].style.color="red";
        }
        else{
            div[i].style.color="yellow";
        }
    }
}

but1.addEventListener('click',funq);