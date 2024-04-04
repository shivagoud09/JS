const dc= document.getElementById('mydiv');

 dc.addEventListener('transitionend',()=>{
    console.log("This is end");
    dc.innerHTML="This is done";
    document.body.style.backgroundColor="green";
})


dc.addEventListener('transitionstart',()=>{
    console.log("This is start");
})

dc.addEventListener('transitioncancel',()=>{
    console.log("this is cancel");
})