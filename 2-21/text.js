const speech= new SpeechSynthesisUtterance();

const b= document.getElementById('button');


b.addEventListener('click',()=>{
    speech.text=document.getElementById('text').value;
    window.speechSynthesis.speak(speech);
})