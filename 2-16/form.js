
const user= document.getElementById('userid');
const pass= document.getElementById('password');
let flag=1;

function validation(){
    if(user.value == ""){
        document.getElementById('uerror').innerHTML="Username is blank";
        flag=0;
    }
    else if(user.value.length <5){
        document.getElementById('uerror').innerHTML="Username is less than 5 digits";
        flag=0;
    }
    else{
        document.getElementById('uerror').innerHTML="";
        flag=1;
    }

    if(pass.value == ""){
        document.getElementById('perror').innerHTML="password is blank";
        flag=0;
    }
    else if(pass.value.length < 5){
        document.getElementById('perror').innerHTML="password is less than 5";
        flag=0;
    }

    else{
        document.getElementById('perror').innerHTML="";
        flag=1;
    }


    if(flag){
        return true;
    }
    else{
        return false;
    }
}
