const div1= document.getElementById('a1')

div1.addEventListener('contextmenu',(r)=>{
    r.preventDefault();
})


const div3= document.getElementById('a3')

div3.addEventListener('dblclick',()=>{
    console.log("double click has done");
})

const div4=document.getElementById('a4')

div4.addEventListener('mousemove',()=>{
    console.log("mouse has been moved");
})

const div5=document.getElementById('a5')

div5.addEventListener('mouseover',()=>{
    console.log("move has been over");
})

const div6= document.getElementById('a6')
div6.addEventListener('mouseenter',fo)
div6.addEventListener('mouseleave',f1)

function fo(){
    div6.style.height="100px"
    div6.style.width="100px"
}

function f1(){
    div6.style.height="50px"
    div6.style.width="50px"
}




