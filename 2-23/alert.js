
const al= document.getElementById('alert');
const bt= document.getElementById('button');

al.addEventListener('click',fun)


function fun(){
    alert("this is an alert");
}

var data="";
function f(){
    if(confirm("press a button to proceed")){
        data="pressed"
    }
    else{
        data="not pressed";
    }
    document.getElementById('info').innerHTML=data;
}

bt.addEventListener('click',f);


