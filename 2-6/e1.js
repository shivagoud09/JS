const div2=document.getElementById('d1')

div2.addEventListener('contextmenu',(r)=>{
    r.preventDefault();
})


const div3=document.getElementById('d3')

div3.addEventListener('dblclick',()=>{console.log("double click")});


const div4=document.getElementById('d4')

div4.addEventListener('mouseenter',enter)
div4.addEventListener('mouseleave',leave)

function enter(){
    div4.style.height="100px";
    div4.style.width="100px";

}

function leave(){
    div4.style.height="50px";
    div4.style.width="50px";

}



const div5=document.getElementById('d5')
div5.addEventListener('mousemove',()=>{
    console.log("mouse moved");
})


const div6= document.getElementById('d6')
div6.addEventListener('mouseover',()=>{
    console.log("mouse over");
})


const div7= document.getElementById('d7')
div7.addEventListener('mouseup',()=>{
    console.log("mouse bottun up");
})