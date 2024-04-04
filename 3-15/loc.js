const x=document.getElementById('btn');
x.addEventListener('click', getLocation);


function getLocation(){
       const success=(position)=>{
        console.log(position);
    }
    const error=()=>{
        console.log("user denied Location");
    }
    navigator.geolocation.getCurrentPosition(success,error);
}