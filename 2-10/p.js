const bu= document.getElementById('b1');
const div=document.getElementsByClassName('c1');

let n= div.length;
function fun(){
    for( let i=0;i<n;i++){
        if(i%2==0){
         div[i].innerHTML="This is even";
        }
        else{
            div[i].outerHTML="This is Odd";
        }
    }
}


bu.addEventListener('click',fun);