const button= document.getElementById('generate');
const input=document.getElementById('input');

length=8;
function fun(){
    let pass="";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase="abcdefghijklmnopqrstuvwxyz"
    const number="0123456789";
    const spl="!@#$%^&*?\\,.";

    const all=uppercase+lowercase+number+spl;
pass +=uppercase[Math.floor(Math.random()*uppercase.length)];
pass +=lowercase[Math.floor(Math.random()*lowercase.length)];
pass +=number[Math.floor(Math.random()*number.length)];
pass +=spl[Math.floor(Math.random()*spl.length)];
 
while(pass.length<length){
    pass+= all[Math.floor(Math.random()*all.length)]

}
input.value=pass;
}

button.addEventListener('click',fun);