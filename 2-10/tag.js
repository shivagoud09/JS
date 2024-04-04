const div1= document.getElementsByTagName('div');
const b1=document.getElementById('b1');
let n= div1.length;
function fc(){
        for( let i=0;i<n;i++){
            if(i%2==0){
             div1[i].innerHTML="This is even";
             div1[i].style.color="red";
            }
            else{
                div1[i].innerHTML="This is Odd";
                div1[i].style.color="green";
            }
        }
    }

    b1.addEventListener('click',fc);
