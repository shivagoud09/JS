const box1=document.getElementsByClassName('box');
const img1= document.querySelector('.im');

img1.addEventListener('dragstart',(s)=>{
    console.log("Dragstart");
    s.target.className += " hold";
    // setTimeout(()=>{
    //     s.target.className="none"
    // },0);
})

img1.addEventListener('dragend',(e)=>{
    console.log("DRAGEND");
e.target.className= "img1";
})

for(let m of box1){
    m.addEventListener('dragover',(r)=>{
        console.log("Dragover");
        r.preventDefault();
    })

    m.addEventListener('dragenter',()=>{
        console.log('DRAGENTER');
    })

    m.addEventListener('dragleave',()=>{
        console.log("DRAGENTER");
    })
    m.addEventListener('drop',(e)=>{
        e.target.append(img1);
    })
}

