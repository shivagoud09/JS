const button = document.getElementById('b1');
const para = document.getElementById('p1');

button.addEventListener('click',fun)

function fun(){
    para.innerHTML = "button got clicked";
}