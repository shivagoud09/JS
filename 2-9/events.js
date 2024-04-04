const bu1= document.getElementById('b1');
const div=document.getElementsByClassName('c1');


n=div.length
console.log(div)
for(i=0;i<n;i++){
    console.log(div[i]);
}

function fun(){
    for(let i=0;i<n;i++){
        div[i].style.color= "green";
    }
}
bu1.addEventListener('click',fun)
