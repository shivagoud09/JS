const in1= document.getElementById('i1');
const in2= document.getElementById('i2')
const in3= document.getElementById('i3')

function fu(){
    console.log("key downed");
}
function fun(){
    console.log("key uped");
}
function funs(){
    console.log("key Press");
}

in1.addEventListener('keydown',fu);
in2.addEventListener('keyup',fun);
in3.addEventListener('keypress',funs);




