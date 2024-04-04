const p1=document.getElementById('t1');
let i=0;
function paste(){
    i++;
    console.log(`this is pasted ${i} many times`);
}

p1.addEventListener('paste',paste);