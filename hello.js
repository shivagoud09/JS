// let n=4;
// let str="";
// for(i=0;i<n;i++)
// {
//     str+="*"
//     for(j=0;j<n;j++)    {
//         str+="#";
//     }
//     str+="\n"
// }
// console.log(str)

let n=8;
let str=""
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if((i+j)%2==0){
            str+="*";
        }
        else{
            str+="#"
        }
    }  
    str+="\n"
}
console.log(str);

