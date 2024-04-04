const box= document.getElementsByClassName('box');
const inner= document.querySelector('.in');

inner.addEventListener('dragstart',()=>{
    console.log("dragstart");
})

inner.addEventListener('dragend',()=>{
    console.log("DRAGEND");
})
for(let i of box){
i.addEventListener('dragover',(e)=>{
    console.log("DRAGOVER");
    e.preventDefault();
})

i.addEventListener('dragenter',()=>{
    console.log("DRAGENTER");
})


i.addEventListener('dragleave',()=>{
    console.log("DRAGLEAVE");
})


i.addEventListener('drop',(e)=>{
    console.log("drop");
    e.target.append(inner);
})
}
