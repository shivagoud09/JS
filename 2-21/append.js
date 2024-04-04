const list= document.getElementById('list');

const bt= document.getElementById('button');

bt.addEventListener('click',()=>{
    const n= document.createElement('li');
    const text= document.createTextNode("shiva");
    n.appendChild(text);
    list.appendChild(n);
})